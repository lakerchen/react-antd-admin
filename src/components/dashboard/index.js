import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class Dashboard extends Component {

  render () {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}