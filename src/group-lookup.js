import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";


class GroupLookup extends Component {

  constructor() {
    super();
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    console.log(this.state.value)
  }

  handleSubmit(event) {
    alert(this.state.value);
    event.preventDefault();
  }

  render() {

    return (

        <form onSubmit={this.handleSubmit}>
          <label>
            Group Passcode:
            <input type="text" value={this.state.value} onChange={this.handleChange} name="group-passcode" />
          </label>
          <input type="submit" value="Go!" />
        </form>

    );
  }
}

export default GroupLookup;
