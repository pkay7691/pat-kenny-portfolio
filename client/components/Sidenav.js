import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


const Sidenav = () => (
  <div id='sidenav'>
      <button className='sidenav-button'>About</button>
      <button className='sidenav-button'>Projects</button>
      <button className='sidenav-button'>Contact</button>
  </div>
)

/**
 * CONTAINER
 */


export default Sidenav

