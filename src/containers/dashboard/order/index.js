import React, { Component } from 'react';
import Order from 'components/dashboard/order';
import { connect } from 'react-redux';

const mapActionCreators = {}

const mapStateToProps = (state) => ({
  // core: state.core
})

export default connect(mapStateToProps, mapActionCreators)(Order);