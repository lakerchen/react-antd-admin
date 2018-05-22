import React, { Component } from 'react';
import About from 'components/dashboard/about';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

const mapActionCreators = {}

const mapStateToProps = (state) => ({
  // core: state.core
})

export default withRouter(connect(mapStateToProps, mapActionCreators)(About))