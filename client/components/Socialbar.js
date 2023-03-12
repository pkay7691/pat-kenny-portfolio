import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


const Socialbar = () => (
  <div id='social-bar-container'>
  <div id='social-bar'>
      <a href='https://www.linkedin.com/in/patrick-m-kenny/'><img id='linkedin-social-bar-button' className='social-bar-buttons' src='linkedin-black.png' /></a>
      <a href='https://github.com/pkay7691'><img className='social-bar-buttons' src='github-black.png' /> </a>
      <a href='https://www.instagram.com/pk_7691/'><img className='social-bar-buttons' src='instagram-black.png' /></a>
  </div>
  </div>
)

/**
 * CONTAINER
 */


export default Socialbar

