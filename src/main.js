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
import Bundle from 'common/Bundle';
import browserHistory from 'utils/history';
import LayoutContainer from 'containers/layout';

// import login from 'bundle-loader?lazy!containers/login';
// import dashBoard from 'bundle-loader?lazy!containers/dashboard';
// import about from 'bundle-loader?lazy!containers/dashboard/about';
// import order from 'bundle-loader?lazy!containers/dashboard/order';

import Login from 'containers/login';
import DashBoard from 'containers/dashboard';
// import About from 'containers/dashboard/about';
// import Order from 'containers/dashboard/order';

import Home from 'routes/home/homeContainer';
// import Login from 'routes/login/loginContainer';
// import DashBoard from 'routes/dashboard/dashboardContainer';
import About from 'routes/dashboard/about/aboutContainer';
import Order from 'routes/dashboard/order/orderContainer';
import Notfound from 'routes/notfound/notfoundContainer';

const mountNode = document.getElementById('root');

const store = createStore(window.__INITIAL_STATE__,browserHistory);

const loader = (loadComp, props) => (props) => (
  <Bundle load={loadComp}>
    {(Comp) => <Comp {...props}/>}
  </Bundle>
)

// const Login = loader(login);
// const Dashboard = loader(dashBoard);


const Base = () => (
  <LayoutContainer>
    <Switch>
      <Route exact path='/' render={() => < DashBoard />} />
      <Route path="/login" component={Login}/>
      <Route path="/dashboard" component={DashBoard}/>
    </Switch>
  </LayoutContainer>
);

const App = (
  <LocaleProvider locale={zhCN}>
    <Provider store={store}>
      <Router history={browserHistory}>
        <Switch>
          <Route path="/" component={Base}/>
          <Route path="/notfound" component={Notfound}/>
        </Switch>
      </Router>
    </Provider>
  </LocaleProvider>
);

ReactDOM.render(App, mountNode)