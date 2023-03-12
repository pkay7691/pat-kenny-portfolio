import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


const Sidenav = () => (
  <div id='sidenav'>
    <Link to='/home'><button className='sidenav-button'>Home</button></Link>
      <Link to='/about'><button className='sidenav-button'>About</button></Link>
      <Link to='/projects'><button className='sidenav-button'>Projects</button></Link>
      <Link to='/contact'><button className='sidenav-button'>Contact</button></Link>
      <Link to='/resume'><button className='sidenav-button'>Resume</button></Link>
  </div>
)

/**
 * CONTAINER
 */


export default Sidenav

