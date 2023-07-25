import React from 'react'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
export const Aboutme = props => {
  const {username} = props

  return (
    <div className='main-container'>

        <img className='about-me-pic' src='blackwhiteprof.png' />
    <div className='about-me-bio'>

      <p>"I recently made the difficult decision to change careers and pursue my passion for app development. I recently graduated from  the Fullstack Academy Software Development program, where I honed my app development skills and learned about front-end, back-end, and data systems.</p>

      </div>
      </div>
  
  )
}

/**
 * CONTAINER
 */


export default Aboutme
