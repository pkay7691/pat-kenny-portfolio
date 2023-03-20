import React from 'react'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
export const Projects = props => {
  const {username} = props

  const projects =[
    {
      name: 'Dev-Up-Social',
      description: ''
  }
  ]

  return (
    <div className='main-container'>
      <div>Arrow</div>
      <img className='about-me-pic' src='pkdev.png' />
    <div className='right-container'>

      </div>
      <div>Arrow</div>
      </div>
  
  )
}

/**
 * CONTAINER
 */


export default Projects
