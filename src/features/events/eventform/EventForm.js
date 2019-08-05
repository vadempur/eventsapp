/*global google*/
import React, { Component } from 'react'
import {connect} from 'react-redux';
import {reduxForm,Field} from 'redux-form';
import { geocodeByAddress,getLatLng} from 'react-places-autocomplete'
import {combineValidators,composeValidators,isRequired,hasLengthGreaterThan } from 'revalidate'
import {createEvent,updateEvent} from '../eventAction'
import { Segment, Form,Button, Grid, Header} from 'semantic-ui-react';
import cuid  from 'cuid'
import TextInput from '../../../common/form/TextInput';
import TextArea from '../../../common/form/TextArea';
import SelectInput from '../../../common/form/SelectInput';
import DateInput from '../../../common/form/DateInput';
import PlaceInput from '../../../common/form/PlaceInput';

const mapState=(state,ownProps)=>{
  const eventId=ownProps.match.params.id;
  let event={
    title:'',
    date:'',
    city:'',
    venue:'',
    hostedBy:''
  }
  if(eventId&&state.events.length>0){
    event=state.events.filter(event=>event.id===eventId)[0]
  }
  return{
    initialValues:event

  }
}
const validate=combineValidators({
  title:isRequired({message:'Title is required'}),
  category:isRequired({message:'Category is Required'}),
  venue:isRequired({message:'Venue is Required'}),
  city:isRequired({message:'City is Required'}),
  description:composeValidators(
  isRequired({message:"description is required"}),
  hasLengthGreaterThan(4)({message:"description should be greater than 4 words"})
  )(),
  date:isRequired({message:'Date is required'})

})

const actions={
  createEvent,updateEvent
}

const category = [
    {key: 'drinks', text: 'Drinks', value: 'drinks'},
    {key: 'culture', text: 'Culture', value: 'culture'},
    {key: 'film', text: 'Film', value: 'film'},
    {key: 'food', text: 'Food', value: 'food'},
    {key: 'music', text: 'Music', value: 'music'},
    {key: 'travel', text: 'Travel', value: 'travel'},
];


 class EventForm extends Component {
  state={
    cityLatLng:{},
    venueLatLng :{}
  }  

  onFormSubmit=values=>{
    values.venueLatLng  =this.state.venueLatLng 
    if(this.props.initialValues.id){
      this.props.updateEvent(values)
      this.props.history.push(`/events/${this.props.initialValues.id}`)

    }else{
      const newEvent={
        ...values,
        id:cuid(),
       hostPhotoURl:'/assets/user.png',
       hostedBy:'shashi'
      }
      this.props.createEvent(newEvent);
      this.props.history.push(`/events`)
    }
  
 }
   
  handleCitySelect=selectedCity=>{
    geocodeByAddress(selectedCity)
    .then(results=>getLatLng(results[0]))
    .then(latlng=>{
         this.setState({
           cityLatLng:latlng
         })
    })
    .then(()=>{
      this.props.change('city',selectedCity)
    })
  }

  handleVenueSelect=selectedVenue=>{
    geocodeByAddress(selectedVenue)
    .then(results=>getLatLng(results[0]))
    .then(latlng=>{
         this.setState({
           venueLatLng:latlng
         })
    })
    .then(()=>{
      this.props.change('venue',selectedVenue)
    }) 
  }

    render() {
      const {history,initialValues,invalid,submitting,prestine}=this.props
        return (

           <Grid>
             <Grid.Column width={10}>
             <Segment>
                    <Header sub color='teal' content='Event details' />
                    <Form onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
                      
                      <Field name='title' component={TextInput} placeholder='Give our evnt a name' />
                      
                      <Field name='category' component={SelectInput} options={category}  placeholder='What is your Event about?' />
                      
                      <Field name='description' component={TextArea} rows={3} placeholder='Write about event' />
                      
                      <Header sub color='teal' content='Event Location Details'/>
                      
                      <Field name='city'
                       component={PlaceInput}
                       options={{ types:['(cities)'] }}
                       onSelect={this.handleCitySelect}
                       placeholder='Event City' />
                      
                      <Field name='venue'
                       component={PlaceInput} 
                       placeholder='Event Venue' 
                       options={{location:new google.maps.LatLng(this.state.cityLatLng),
                       radius:1000,
                       types:['establishment']
                      }}

                      onSelect={this.handleVenueSelect}
                       />
                      
                      <Field
                       name='date'
                       component={DateInput}
                       showTimeSelect
                       dateFormat='dd LLL yyyy h:mm a'
                       timeFormat='HH:mm'
                       placeholder='Event Date' />
                      
                      <Button disabled={invalid||submitting||prestine} positive type="submit">
                        Submit
                      </Button>
                      
                      <Button onClick={
                        initialValues.id?()=>history.push(`/events/${initialValues.id}`):
                        ()=>history.push('/events')
                      } type="button">Cancel</Button>
                    
                    </Form>
                  
                  </Segment>
            
             </Grid.Column>
           
           </Grid>
                
        )
    }
}

export default connect(
   mapState,
   actions
   )(reduxForm({form:'eventForm' ,validate}) (EventForm));