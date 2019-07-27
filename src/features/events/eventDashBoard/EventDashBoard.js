import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react';
import EventList from '../eventList/EventList';
import { connect } from 'react-redux';
import {createEvent,updateEvent,deleteEvent } from '../eventAction';


const mapToProps=(state)=>({
    events:state.events
})
 

const actions={
  createEvent,
  updateEvent,
  deleteEvent
}

 class EventDashBoard extends Component {
    //  state={
    //      isOpen:false,
    //      isSelected:null,
    //  }

    //  formToggleOpen=()=>{
    //  this.setState(({isOpen})=>({
    //    isOpen:!isOpen
    //  }))
    //  }
    
  //  handleOpenFrom=()=>{
  //   this.setState({
  //     isOpen:true,
  //   })
  //  }
  //  handleCloseForm=()=>{
  //    this.setState({
  //      isOpen:false,
  //      isSelected:null
  //    })
  //  }
 

    

    // handleSelectedEvent=(event)=>{
    //   // this.setState({
    //   //   isSelected:event,
    //   //   isOpen:true,
    //   // })
    // }

    handleDeleteEvent=(id)=>{
      this.props.deleteEvent(id)
    }

    render() {
        const { events }=this.props;

        return (
            <Grid>
                <Grid.Column width={10}>
                    <EventList events={events} deleteEvent={this.handleDeleteEvent}  />
                </Grid.Column>
                <Grid.Column width={6}>
                    {/* <Button onClick={this.handleOpenFrom} positive content='Create event'/>
                    {isOpen &&<EventForm
                    key={isSelected?isSelected.id:0}
                    isSelected={isSelected}
                    createEvent={this.handleCreateEvent}
                    updateEvent={this.handleUpdateEvent}
                    cancelEvent={this.handleCloseForm} />} */}
                    <h2>Aactivity Feed</h2>
                </Grid.Column>
            </Grid>
        )
    }
}

export default connect(mapToProps,actions) (EventDashBoard);