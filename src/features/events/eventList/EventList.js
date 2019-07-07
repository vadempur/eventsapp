import React, { Component,Fragment } from 'react'
import EventListItem from './EventListItem';

export default class EventList extends Component {
    render() {
        const {events,selectdEvent, deleteEvent} =this.props
        return (
         <Fragment>
             {events.map(event=>(
               <EventListItem key={event.id} event={event} selectdEvent={selectdEvent} deleteEvent={deleteEvent}/>
             ))}
         </Fragment>
        )
    }
}
