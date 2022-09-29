import React from 'react';
import {Link} from 'react-router-dom';
import {Navbar, Nav, NavLink} from 'react-bootstrap';
import Login from '../pag/Login';
import Logout from '../pag/Logout';
import {auth} from '../firebase';
import {useAuthState} from 'react-firebase-hooks/auth'


function BootstrapNavbar() {

const [user] = useAuthState(auth)
console.log(user)

  return (
    <Navbar collapseOnSelect expand='sm' bg='dark'>
<Navbar.Toggle aria-controls='myNavbar' />
<Navbar.Collapse>
<Nav id='myNavbar'>
    <NavLink style={{color: 'white'}} as={Link} to='./' className='Anim'>Layout</NavLink>
    <NavLink style={{color: 'white'}} as ={Link} to = '/Home' className='Anim'>Anime</NavLink>
    <NavLink style={{color: 'white'}} as={Link} to='/Game' className='Anim'>Games</NavLink>
</Nav>
</Navbar.Collapse>
{user? <Logout/> : <Login/>}
    </Navbar>
  )
}

export default BootstrapNavbar