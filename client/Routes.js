import React, { useState } from 'react'
import {Route, Redirect} from 'react-router-dom'
import Home from './components/Home';
import Sidenav from './components/Sidenav';
import Aboutme from './components/Aboutme';
import Projects from './components/Projects';

/**
 * COMPONENT
 */
const Routes = () => {


  const [firstRender, setFirstRender] = useState(true)

  const route = [
    {path: '/', name: 'Home'}
  ]


    return (
      <div id='landing-page-body'>
            <Route exact path='/'>
              <Redirect to='/home' />
            </Route>
            <Route path="/home"  render={() => <Home firstRender={firstRender} setFirstRender={setFirstRender} />}/>
            <Route path='/about' component={Aboutme} />
            <Route path='/projects' component={Projects} />

      </div>
    )
  }


/**
 * CONTAINER
 */


// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default Routes
