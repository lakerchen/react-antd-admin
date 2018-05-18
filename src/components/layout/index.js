import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class LayoutView extends React.Component {
  render() {
    return (
      <div>{this.props.children}</div>
    );
  }
}