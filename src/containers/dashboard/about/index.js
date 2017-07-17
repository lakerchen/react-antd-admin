import React, { Component } from 'react';
import About from 'components/dashboard/about';
import { connect } from 'react-redux';

const mapActionCreators = {}

const mapStateToProps = (state) => ({
  // core: state.core
})

export default connect(mapStateToProps, mapActionCreators)(About)