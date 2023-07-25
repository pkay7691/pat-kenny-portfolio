import React from "react";
import { connect } from "react-redux";

/**
 * COMPONENT
 */
export const Aboutme = (props) => {
  const { username } = props;

  return (
    <div className="main-container">
      <img className="about-me-pic" src="blackwhiteprof.png" />
      <div className="about-me-bio">
        <p>
          "I recently made the difficult decision to change careers and pursue
          my passion for app development. I recently graduated from the
          Fullstack Academy Software Development program, where I honed my app
          development skills and learned about front-end, back-end, and data
          systems.
        </p>

        <p>
          I am looking for opportunities to work on exciting app development
          projects and continue growing as a software engineer. It's extremely
          exciting to be in an industry that is always changing and provides
          endless room to grow!"
        </p>
      </div>
    </div>
  );
};

/**
 * CONTAINER
 */

export default Aboutme;
