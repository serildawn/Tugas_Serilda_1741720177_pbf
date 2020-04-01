import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch,
    Redirect,
  } from "react-router-dom";
 
  export default function Barangnya() {
      return (
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/dekorasi">Dekorasi</Link>
              </li>
              
            </ul>
            <hr />
    
            <Switch>
              <Route path="/dekorasi">
                <Dekorasi />
              </Route>
            </Switch>
          </div>
        </Router>
      );
    }
    
    function Dekorasi() {
      
      let {path, url} = useRouteMatch();
      return (
        <div>
          <h2>Jenis Dekorasi</h2>
          <ul>
          <li>
              <Link to={`${url}/Start From 250k`}>Table Setting</Link>
            </li>
            <li>
              <Link to={`${url}/Start From 500k`}>Birthday</Link>
            </li>
            <li>
              <Link to={`${url}/Start From 750k`}>Room Decoration</Link>
            </li>
            <li>
              <Link to={`${url}/Start Form 1000k`}>Engangement</Link>
            </li>
          </ul> 
          <Switch>
            <Route exact path={path}>
              <h3>Please select an item.</h3>
            </Route>
            <Route path={`${path}/:topicId`}>
              <Topic />
            </Route>
          </Switch>
        </div>
      );
    }

   
    
    function Topic() {
      let {topicId} = useParams();
    
      return (
        <div>
          <h3>{topicId}</h3>
        </div>
      );
    }