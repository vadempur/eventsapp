import React, { Component,Fragment } from 'react';
import Navbar from './features/navbar/nav/Navbar';
import { Container } from 'semantic-ui-react';
import EventDashBoard from './features/events/eventDashBoard/EventDashBoard';


export default class App extends Component {
  render() {
    return (
      <Fragment>
      <Navbar/>
      <Container className="main">
      <EventDashBoard/>
      </Container>
     </Fragment>
    )
  }
}
