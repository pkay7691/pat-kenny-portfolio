import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import Home from './components/Home';
import Sidenav from './components/Sidenav';

/**
 * COMPONENT
 */
const Routes = () => {





    return (
      <div id='landing-page-body'>

            <Route path="/home" component={Home} />
            <Redirect to="/home" />
      </div>
    )
  }


/**
 * CONTAINER
 */


// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default Routes
