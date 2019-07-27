import React, { Component,Fragment } from 'react';
import Navbar from './features/navbar/nav/Navbar';
import { Container } from 'semantic-ui-react';
import EventDashBoard from './features/events/eventDashBoard/EventDashBoard';
import { Route } from 'react-router-dom';
import Homepage from './features/home/HomePage'
import EventsDetailedPage from './features/events/eventsDetailed/EventsDetailedPage';
import PeopleDashboard from './features/user/peopleDashboard/PeopleDashboard';
import UserDetailed from './features/user/userDetailed/UserDetailed';
import SettingsDashBoard from './features/user/settings/SettingsDashBoard';
import EventForm from './features/events/eventform/EventForm';


export default class App extends Component {
  render() {
    return (
      <Fragment>
      <Route exact path='/' component={Homepage} />
      <Route  path='/(.+)' render={()=>(
        
          <Fragment>
            <Navbar/>
            <Container className="main">
            <Route exact path='/events' component={EventDashBoard} />
            <Route path='/events/:id' component={EventsDetailedPage} />
            <Route path='/people' component={PeopleDashboard} />
            <Route path='/profile/:id' component={UserDetailed} />
            <Route path='/settings' component={SettingsDashBoard} />
            <Route path='/createEvent' component={EventForm} />
            </Container>
          </Fragment>
      )} />
       
      </Fragment>
 
    )
  }
}
