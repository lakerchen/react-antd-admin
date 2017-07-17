import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class Layout extends Component {
  static propTypes = {
    children: PropTypes.element
  }

  render () {
    return (
      <div>
        <div id="admin-menu">
          <h1>App</h1>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
          </ul>
        </div>
        {this.props.children}
      </div>
    )
  }
}