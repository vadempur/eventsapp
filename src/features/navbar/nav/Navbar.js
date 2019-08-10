import React, { Component } from 'react'
import { Menu,Container,Button } from 'semantic-ui-react';
import { NavLink, Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {openModal} from '../../Modal/modalActions';
import SIgnOutMenu from './menus/SIgnOutMenu';
import SignInMenu from './menus/SignInMenu';


 const actions={
   openModal
 }

 class Navbar extends Component {


  state={
    authenticated:false
  }
   handleSignIn=()=>{
     this.props.openModal('LoginModal')
   }
   handleRegister=()=>{
     this.props.openModal('RegisterModal')
   }

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

                     <Menu.Item as={NavLink} exact to='/events' name="Events" />

                     <Menu.Item as={NavLink} to='/peoples' name="Peoples" />

                     <Menu.Item>
                       <Button as={Link} to='/createEvent' floated="right" positive inverted content="Create Event" />
                     </Menu.Item>                      
                     {authenticated?(
                     <SignInMenu signOut={this.handleSignOut}/>)
                     :(<SIgnOutMenu signIn={this.handleSignIn}
                      register={this.handleRegister}
                     />)} 

                  </Container>

               </Menu>
        )
    }
}

export default withRouter( connect(null,actions)(Navbar))