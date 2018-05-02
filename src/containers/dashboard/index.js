import React, { Component } from 'react';
import Dashboard from 'components/dashboard';
import { connect } from 'react-redux';

const mapActionCreators = {}

const mapStateToProps = (state) => ({
  // core: state.core
})

console.log('Dashboard in container',Dashboard)

export default connect(mapStateToProps, mapActionCreators)(Dashboard);