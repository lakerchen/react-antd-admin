import 'promise-polyfill';
import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import { connect, Provider } from 'react-redux';
import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import { Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import { syncHistoryWithStore } from 'react-router-redux';
import createStore from './store/createStore';
import browserHistory from 'utils/history';
import { auth } from 'common/auth';

import Login from 'containers/login';
import DashBoard from 'containers/dashboard';
import Notfound from 'containers/notfound';
import store from './store';
const mountNode = document.getElementById('root');

// <Route path="/dashboard" component={DashBoard} />

const App = (
  <LocaleProvider locale={zhCN}>
    <Provider store={store}>
      <Router history={browserHistory}>
        <Switch>
          <Route path="/dashboard" children={({...props}) => {
            if (!auth.loggedIn()) {
              location.hash = '#/login';
              return <Login {...props}/>;
            } else {
              return <DashBoard {...props}/>;
            }
            }} />
          <Redirect from="/" to="/dashboard" exact />
          <Route path="/login" component={Login} />
          <Route component={Notfound} />
        </Switch>
      </Router>
    </Provider>
  </LocaleProvider>
);

ReactDOM.render(App, mountNode)

//     Login
//     Dashboard
//         home
//         order
//             create
//             edit
//         about
//     Notfound