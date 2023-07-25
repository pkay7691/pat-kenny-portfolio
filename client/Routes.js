import React, { useState } from "react";
import { Route, Redirect, Switch, useLocation } from "react-router-dom";
import Home from "./components/Home";
import Sidenav from "./components/Sidenav";
import Aboutme from "./components/Aboutme";
import Projects from "./components/Projects";
import { CSSTransition, TransitionGroup } from "react-transition-group";

/**
 * COMPONENT
 */
const Routes = () => {
  const [firstRender, setFirstRender] = useState(true);

  const route = [{ path: "/", name: "Home" }];
  const location = useLocation()

  return (
    <div id="landing-page-body">
      {/* <Route exact path='/'>
        <Redirect to='/home' />
      </Route> */}
      <TransitionGroup>
        <CSSTransition timeout={300} classNames='fade'  key={location.key}>
          <Switch location={location}>
            <Route path="/home" component={Home} />
            <Route path="/about" component={Aboutme} />
            <Route path="/projects" component={Projects} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

/**
 * CONTAINER
 */

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default Routes;
