import React, { Component } from 'react'
import {connect} from 'react-redux';
import {createEvent,updateEvent} from '../eventAction'
import { Segment, Form,Button} from 'semantic-ui-react';
import cuid  from 'cuid'

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
    event

  }
}

const actions={
  createEvent,updateEvent
}



 class EventForm extends Component {
  state={...this.props.event}
  
  componentDidMount(){
    if(this.props.isSelected!==null){
      this.setState({
        ...this.props.isSelected
      })
    }
  }


  handleFormSubmit=(evt)=>{
    evt.preventDefault();
    if(this.state.id){
      this.props.updateEvent(this.state)
      this.props.history.push(`/events/${this.state.id}`)

    }else{
      const newEvent={
        ...this.state,
        id:cuid(),
       hostPhotoURl:'/assets/user.png'
      }
      this.props.createEvent(newEvent);
      this.props.history.push(`/events`)
    }
  }

  // handleInputChange=(evt)=>{
  //   this.setState({
  //     [evt.target.name]:evt.target.value,
  //   })
  // }

  handleInputChange=({target:{name,value}})=>{
    this.setState({
      [name]:value,
    })
  }


    render() {
      const {title,date,city,venue,hostedBy} =this.state
        return (
                  <Segment>
                    <Form onSubmit={this.handleFormSubmit}>
                      <Form.Field>
                        <label>Event Title</label>
                        <input
                          name='title'
                          value={title}
                          onChange={this.handleInputChange}
                        placeholder="title" />
                      </Form.Field>
                      <Form.Field>
                        <label>Event Date</label>
                        <input 
                        name='date'
                        value={date}
                        onChange={this.handleInputChange}
                        type="date" placeholder="Event Date" />
                      </Form.Field>
                      <Form.Field>
                        <label>City</label>
                        <input
                          name='city'
                          value={city}
                          onChange={this.handleInputChange}
                        placeholder="City event is taking place" />
                      </Form.Field>
                      <Form.Field>
                        <label>Venue</label>
                        <input
                         name='venue'
                         value={venue}
                         onChange={this.handleInputChange} 
                        placeholder="Enter the Venue of the event" />
                      </Form.Field>
                      <Form.Field>
                        <label>Hosted By</label>
                        <input
                         name='hostedBy'
                         value={hostedBy}
                         onChange={this.handleInputChange}
                        placeholder="Enter the name of person hosting" />
                      </Form.Field>
                      <Button positive type="submit">
                        Submit
                      </Button>
                      <Button onClick={this.props.history.goBack} type="button">Cancel</Button>
                    </Form>
                  </Segment>
        )
    }
}

export default connect(mapState,actions)(EventForm);