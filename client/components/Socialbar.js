import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import gsap from 'gsap'


const Socialbar = () => {

  const handleHover = (name) => {
    console.log('mouse in')
    let animation = gsap.to(name, { rotation: 25 })
    animation.play()
  }
  const handleMouseOut = (name) => {
    console.log('mouse out')
    let animation = gsap.to(name, { rotation: 0 })
    animation.stop()
  }


  return (
    <div id='social-bar-container'>
      <div id='social-bar'>
        <a href='https://www.linkedin.com/in/patrick-m-kenny/'>
          <img
          onMouseOver={(e) => handleHover('#linkedin-social-bar-button')}
          onMouseOut={(e) => handleMouseOut('#linkedin-social-bar-button')}
            id='linkedin-social-bar-button'
            className='social-bar-buttons'
            src='linkedin-black.png' />
        </a>
        <a href='https://github.com/pkay7691'>
          <img
          onMouseOver={(e) => handleHover('#github-social-bar-button')}
          onMouseOut={(e) => handleMouseOut('#github-social-bar-button')}
          id='github-social-bar-button'
            className='social-bar-buttons'
            src='github-black.png' />
        </a>
        <a href='https://www.instagram.com/pk_7691/'>
          <img
          onMouseOver={(e) => handleHover('#instagram-social-bar-button')}
          onMouseOut={(e) => handleMouseOut('#instagram-social-bar-button')}
          id='instagram-social-bar-button'
            className='social-bar-buttons'
            src='instagram-black.png' />
        </a>
      </div>
    </div>
  )
}

/**
 * CONTAINER
 */


export default Socialbar

