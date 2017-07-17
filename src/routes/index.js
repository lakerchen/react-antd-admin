import React from 'react';
import Layout from 'containers/layout';
import login from './login';
import dashboard from './dashboard';

console.log('Layout',Layout)
console.log('login',login)
console.log('dashboard',dashboard)

const routes = {
  path: '/',
  component: Layout,
  indexRoute: { 
    onEnter : (nextState, replace) => {
      console.log('enter path : /')
      replace('/dashboard') 
    }
  },
  childRoutes : [
    login,
    dashboard,
  ]
}

export default routes;