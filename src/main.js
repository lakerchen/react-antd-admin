import {  hashHistory, IndexRoute, Redirect ,useRouterHistory} from 'react-router';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import { connect } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import routes from 'routes';
import createStore from './store/createStore';
import createHistory from 'history/createHashHistory';
import Bundle from 'common/Bundle';

// import Layout from 'containers/layout';

import login from 'bundle-loader?lazy!containers/login';
import dashBoard from 'bundle-loader?lazy!containers/dashboard';
import about from 'bundle-loader?lazy!containers/dashboard/about';
import order from 'bundle-loader?lazy!containers/dashboard/order';

const mountNode = document.getElementById('root');
// const browserHistory = useRouterHistory(createHashHistory)({
//   basename: ''
// });
// const store = createStore(window.__INITIAL_STATE__, hashHistory);

const history = createHistory();
const store = createStore(window.__INITIAL_STATE__,history);

// const history = syncHistoryWithStore(browserHistory, store, {
//   selectLocationState: (state) => state.router
// });

const loader = (loadComp, props) => (props) => (
  <Bundle load={loadComp}>
    {(Comp) => <Comp {...props}/>}
  </Bundle>
)

// const Login = loader(login);
// const Dashboard = loader(dashBoard);

class Layout extends React.Component {
  constructor(props){
    super(props);
  }

  render () {
    // console.log('this.props', this.props)
    return (
      <div>
        <div id="admin-menu">
          <h1>App</h1>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/dashboard/about">About</Link></li>
            <li><Link to="/dashboard/order">Order</Link></li>
          </ul>
        </div>
        {this.props.children}
      </div>
    )
  }
}

const mapActionCreators = {}

const mapStateToProps = (state) => ({
  // core: state.core
})

console.log('layout in container',Layout)

const LayoutContainer = connect(mapStateToProps, mapActionCreators)(Layout)


class App extends React.Component {
  componentDidMount() {

  }

  render() {
    console.log('Layout',Layout)
    console.log('login',loader(login))
    return (
      <Provider store={store}>
        <Router history={history}>
          <LayoutContainer>
            <Switch>
              <Route exact path="/" component={loader(login)}/>
              <Route path="/login" component={loader(login)}/>
              <Route path="/dashboard" component={loader(dashBoard)}>
                <Route path="about" component={loader(about)}/>
                <Route path="order" component={loader(order)}/>
              </Route>
            </Switch>
          </LayoutContainer>
        </Router>
      </Provider>
    )
  }
}

ReactDOM.render(<App/>, mountNode)