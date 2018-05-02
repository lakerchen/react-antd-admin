import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class Layout extends Component {
  constructor(props){
    super(props);
  }

  render () {
    // console.log('this.props', this.props)
    return (
      <div>
        <div id="admin-menu">
          <h1>App</h1>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/dashboard/about">About</Link></li>
            <li><Link to="/dashboard/order">Order</Link></li>
          </ul>
        </div>
        {this.props.children}
      </div>
    )
  }
}