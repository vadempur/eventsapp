import React from 'react'
import { Grid, GridColumn } from 'semantic-ui-react';
import { connect } from 'react-redux'
import EventsDetailedInfo from './EventsDetailedInfo';
import EventsDetailedChat from './EventsDetailedChat';
import EventsDetailedSidebar from './EventsDetailedSidebar';
import EventsDetailedHeader from './EventsDetailedHeader';


const mapState=(state,ownProps)=>{
    const eventId=ownProps.match.params.id;
    let event={}

    if(eventId&&state.events.length>0){
        event=state.events.filter(event=> event.id === eventId )[0]
    }
     return {
         event
     }

}

 const EventsDetailedPage = ({event}) => {
    return (
        <Grid>
            <GridColumn width={10}>
                <EventsDetailedHeader event={event} />
                <EventsDetailedInfo  event={event}  />
                <EventsDetailedChat/>
            </GridColumn>
            <GridColumn width={6}>
               <EventsDetailedSidebar attendees={event.attendees} />   
            </GridColumn>
        </Grid>
    )
}

export default connect(mapState)(EventsDetailedPage);