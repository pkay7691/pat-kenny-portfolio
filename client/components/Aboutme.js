import React from 'react'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
export const Aboutme = props => {
  const {username} = props

  return (
    <div className='main-container'>
        <img className='about-me-pic' src='about-me.jpg' />
    <div className='right-container'>

      <p>I recently made the difficult decision to change careers and pursue my passion for app development. I am currently enrolled at the Fullstack Academy, where I am honing my Javascript skills and learning about front-end, back-end, and data systems. Some of the technologies and frameworks I am particularly interested in include React, Node.js, and Sequelize. </p>

      <p>I am excited to bring my skills and experience to a new career in app development and am eager to learn from experienced professionals in the industry. I am looking for opportunities to work on exciting app development projects and continue growing as a software engineer. It's extremely exciting to be in an industry that is always changing and provides endless room to grow!</p>
      </div>
      </div>
  
  )
}

/**
 * CONTAINER
 */


export default Aboutme
