import React from 'react'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
export const Home = props => {
  const {username} = props

  return (
    <div id='home-container' >
        <img id='home-logo' src='pkdev.png' />
      <div id='home-right-container'>
        <img id='home-profpic' src='blackwhiteprof.png' />
        <div id='home-quote'>JUST CODE IT.</div>
      </div>
      </div>
  
  )
}

/**
 * CONTAINER
 */


export default Home
