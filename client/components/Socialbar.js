import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


const Socialbar = () => (
  <div id='social-bar-container'>
  <div id='social-bar'>
      <img id='linkedin-social-bar-button' className='social-bar-buttons' src='linkedin-black.png' />
      <img className='social-bar-buttons' src='github-black.png' />
      <img className='social-bar-buttons' src='instagram-black.png' />
  </div>
  </div>
)

/**
 * CONTAINER
 */


export default Socialbar

