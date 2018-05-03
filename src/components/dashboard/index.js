import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CreateOrder from 'containers/dashboard/order/create';
import EditOrder from 'containers/dashboard/order/edit';

export default class Dashboard extends Component {
  render () {
    return (
      <div>
        <Switch>
          <Route path="/dashboard/order/create" component={CreateOrder}/>
          <Route path="/dashboard/order/edit" component={EditOrder}/>
        </Switch>
      </div>
    )
  }
}