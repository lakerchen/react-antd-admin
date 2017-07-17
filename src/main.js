import { Router, Route, hashHistory, IndexRoute, Redirect ,useRouterHistory} from 'react-router';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import routes from 'routes';
import createStore from './store/createStore';
import createHistory from 'history/createHashHistory';

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

class App extends React.Component {
  componentDidMount() {

  }

  render() {
    console.log('routes',routes)
    return (
      <Provider store={store}>
        <div style={{ height: '100%' }}>
          <Router children={routes} history={history}/>
        </div>
      </Provider>
    )
  }
}

ReactDOM.render(<App/>, mountNode)