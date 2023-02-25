import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


const Navbar = () => (
  <div id='navbar'>
    <div>
      <button>Pat Kenny</button>
    </div>
    <div>
      <button>About</button>
      <button>Projects</button>
      <button>Contact</button>
    </div>
  </div>
)

/**
 * CONTAINER
 */


export default Navbar

