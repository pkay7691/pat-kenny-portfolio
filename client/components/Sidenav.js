import anime from 'animejs'
import React from 'react'
import gsap from 'gsap'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { useRef } from 'react'
import { useEffect } from 'react'

const Sidenav = () => {
  let home = useRef(null)
  console.log(home)

 


  const handleHover = (name)  => {
    console.log('mouse in')
    let animation = gsap.to(name, {x: 10})
    animation.play()
  }
  const handleMouseOut = (name) => {
    console.log('mouse out')
    let animation = gsap.to(name, {x: 0})
    animation.play()
  }
  



  return (
    <div id='sidenav' ref={home}>
      <Link 
      to='/home'
      onMouseEnter={(e) => handleHover('#sidenav1')}
      onMouseOut={(e) => handleMouseOut('#sidenav1')}>
        <button
          id='sidenav1'
          className='sidenav-button'
        >Home
        </button>
      </Link>
      <Link to='/about'>
        <button
        
          id='sidenav2'
          onMouseEnter={(e) => handleHover('#sidenav2')}
          onMouseOut={(e) => handleMouseOut('#sidenav2')}
          className='sidenav-button'>About
        </button>
      </Link>
      <Link to='/projects'>
        <button
        onMouseEnter={(e) => handleHover('#sidenav3')}
        onMouseOut={(e) => handleMouseOut('#sidenav3')}
          id='sidenav3'
          className='sidenav-button'>Projects
        </button>
      </Link>
      <a href='mailto: patrickmkenny91@gmail.com'>
        <button
        onMouseEnter={(e) => handleHover('#sidenav4')}
        onMouseOut={(e) => handleMouseOut('#sidenav4')}
          id='sidenav4'
          className='sidenav-button'>Contact
        </button>
      </a>
      <a href='patrick kenny_resume.docx' download>
        <button
          onMouseEnter={(e) => handleHover('#sidenav5')}
          onMouseOut={(e) => handleMouseOut('#sidenav5')}
          id='sidenav5'
          className='sidenav-button'>Resume
        </button>
      </a>
    </div>
  )
}

/**
 * CONTAINER
 */


export default Sidenav

