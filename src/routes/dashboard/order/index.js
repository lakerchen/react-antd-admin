import React from 'react';
import loadOrder from 'bundle-loader?lazy!containers/dashboard/order';
import Bundle from 'common/Bundle';

const Order = (props) => (
  <Bundle load={loadOrder}>
    {(Order) => <Order {...props}/>}
  </Bundle>
)

const routes = {
  path: 'order',
  component: Order,
}

export default routes;