import React, { Fragment } from 'react'
import { Segment, Item, Label } from 'semantic-ui-react';

const EventsDetailedSidebar = ({attendees}) => {
    const isHost=false;
    return (
              <Fragment>
                <Segment
                  textAlign='center'
                  style={{ border: 'none' }}
                  attached='top'
                  secondary
                  inverted
                  color='teal'
                >
                      
                  <span >{attendees&&attendees.length }&nbsp;</span><span>
                  {attendees&&attendees.length === 1 ?'Person':'People'}&nbsp;
                  </span>Going
                </Segment>
                <Segment attached>
                  <Item.Group divided>
                   {attendees&&attendees.map(attendee=>(
                        <Item key={attendee.id} style={{ position: 'relative' }}>
                            {isHost&&
                            <Label
                            style={{ position: 'absolute' }}
                            color='orange'
                            ribbon='right'
                          >
                            Host
                          </Label>
                            }
                        <Item.Image size='tiny' src={attendee.photoURL} />
                        <Item.Content verticalAlign='middle'>
                          <Item.Header as='h3'>{attendee.name}</Item.Header>
                        </Item.Content>
                      </Item>
                   ))}
                  </Item.Group>
                </Segment>
              </Fragment>
    )
}

export default EventsDetailedSidebar
