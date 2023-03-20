import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import anime from 'animejs'
import gsap from 'gsap'
import ReactCSSTransitionGroup from 'react-transition-group'
/**
 * COMPONENT
 */
export const Home = ({ firstRender, setFirstRender }) => {






  useEffect(() => {
    console.log(firstRender)
    if (firstRender) {
      const tl = gsap.timeline(({}))
      tl.from('#home-logo', { x: 500, duration: 1 })
      tl.from('#home-quote', { y: 500, duration: 1 })
      tl.from('#home-profpic', { opacity: 0, duration: 1 })
      tl.play()
      setFirstRender(false)
    }


  }, [])





  return (

      <div id='home-container' >
        <img id='home-logo' src='pkdev.png' />
          {/* <div id='home-quote'>JUST CODE IT.</div> */}
      </div>

  )
}

/**
 * CONTAINER
 */


export default Home
