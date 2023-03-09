import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


const Navbar = () => (
  <div id='navbar'>
<div className="dropdown">
  <img src='dropdown-menu.png' className="dropbtn" />
  <div className="dropdown-content">
    <a href="#">ABOUT ME</a>
    <a href="#">PROJECTS</a>
    <a href="#">CONTACT</a>
  </div>
</div>
  </div>
)

/**
 * CONTAINER
 */


export default Navbar

