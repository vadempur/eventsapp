import React, { Component } from 'react'
import { Grid, Button } from 'semantic-ui-react';
import EventList from '../eventList/EventList';
import EventForm from '../eventform/EventForm';
import cuid from 'cuid';
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
     state={
         isOpen:false,
         isSelected:null,
     }

    //  formToggleOpen=()=>{
    //  this.setState(({isOpen})=>({
    //    isOpen:!isOpen
    //  }))
    //  }
    
   handleOpenFrom=()=>{
    this.setState({
      isOpen:true,
    })
   }
   handleCloseForm=()=>{
     this.setState({
       isOpen:false,
       isSelected:null
     })
   }
 

    handleCreateEvent=newEvent=>{
      newEvent.id=cuid()
      newEvent.hostPhotoURL='/assets/user.png';
      this.props.createEvent(newEvent)
      this.setState(()=>({
        isOpen:false
      }))
    }


    handleUpdateEvent=updatedEvent=>{
      this.props.updateEvent(updatedEvent)
      this.setState(
        {isOpen:false,
        isSelected:null
       })
    }

    handleSelectedEvent=(event)=>{
      this.setState({
        isSelected:event,
        isOpen:true,
      })
    }

    handleDeleteEvent=(id)=>{
      this.props.deleteEvent(id)
    }

    render() {
        const {isOpen,isSelected}=this.state;
        const { events }=this.props;

        return (
            <Grid>
                <Grid.Column width={10}>
                    <EventList events={events} selectdEvent={this.handleSelectedEvent} deleteEvent={this.handleDeleteEvent} />
                </Grid.Column>
                <Grid.Column width={6}>
                    <Button onClick={this.handleOpenFrom} positive content='Create event'/>
                    {isOpen &&<EventForm
                    key={isSelected?isSelected.id:0}
                    isSelected={isSelected}
                    createEvent={this.handleCreateEvent}
                    updateEvent={this.handleUpdateEvent}
                    cancelEvent={this.handleCloseForm} />}
                </Grid.Column>
            </Grid>
        )
    }
}

export default connect(mapToProps,actions) (EventDashBoard);