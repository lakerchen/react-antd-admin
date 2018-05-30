import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class EditOrder extends Component {
  render () {
    console.log('this.props', this.props)
    return (
      <div>
        Edit order: {this.props.match.params.orderno}
      </div>
    )
  }
}