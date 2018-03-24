import React, { Component } from "react";
import {
  Route,
  NavLink,
  browserHistory,
  HashRouter
} from "react-router-dom";

import Home from "./Home";
import GroupLookup from "./group-lookup";
import GroupDashboard from "./GroupDashboard";



class Main extends Component {
  constructor() {
    super();
    this.lookupGroup = this.lookupGroup.bind(this);
  }

  lookupGroup (passcode){
    this.setState({ group: passcode });
  }



  render() {
    console.log(this);
    return (
      <HashRouter>
        <div>
          <h1>Mountain Goat Gang</h1>
          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/group-lookup"> Go to Group </NavLink></li>
          </ul>
          <div id="hello"></div>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/group-lookup" component={GroupLookup}/>
            <Route path="/group-dashboard" component={GroupDashboard}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
