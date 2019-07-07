import React, { Component } from 'react'
import { Segment, Form,Button} from 'semantic-ui-react';

export default class EventForm extends Component {
  state={
    titile:'',
    date:'',
    city:'',
    venue:'',
    hostedBy:''
  }

  handleFormSubmit=(evt)=>{
    evt.preventDefault();
    this.props.createEvent(this.state);
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
      const {cancelEvent} =this.props
      const {titile,date,city,venue,hostedBy} =this.state
        return (
                  <Segment>
                    <Form onSubmit={this.handleFormSubmit}>
                      <Form.Field>
                        <label>Event Title</label>
                        <input
                          name='titile'
                          value={titile}
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
                      <Button onClick={cancelEvent} type="button">Cancel</Button>
                    </Form>
                  </Segment>
        )
    }
}
