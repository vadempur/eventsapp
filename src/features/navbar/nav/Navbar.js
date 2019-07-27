import React, { Component } from 'react'
import { Menu,Container,Button } from 'semantic-ui-react';
import { NavLink, Link, withRouter } from 'react-router-dom';
import SIgnOutMenu from './menus/SIgnOutMenu';
import SignInMenu from './menus/SignInMenu';

 class Navbar extends Component {
  state={
    authenticated:true
  }
  handleSignIn=()=>this.setState({authenticated:true});

  handleSignOut=()=>{
    this.setState({authenticated:false});
    this.props.history.push('/')
  }

    render() {
      const {authenticated} =this.state;
        return (
                 <Menu inverted fixed="top">

                   <Container>

                     <Menu.Item header as={NavLink} to='/'>

                      <img src="/assets/logo.png" alt="logo" />
                       Re-vents

                     </Menu.Item>

                     <Menu.Item as={NavLink} to='/events' name="Events" />

                     <Menu.Item as={NavLink} to='/peoples' name="Peoples" />

                     <Menu.Item>
                       <Button as={Link} to='/createEvent' floated="right" positive inverted content="Create Event" />
                     </Menu.Item>                      
                     {authenticated?<SignInMenu signOut={this.handleSignOut}/>:<SIgnOutMenu signIn={this.handleSignIn}/>} 

                  </Container>

               </Menu>
        )
    }
}

export default withRouter(Navbar)