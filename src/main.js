import { Router, Route, hashHistory, IndexRoute, Redirect ,useRouterHistory} from 'react-router';
import React from 'react';
import ReactDOM from 'react-dom';

const mountNode = document.getElementById('root');

let render = (key = null) => {

//用这种方式配置路由，webpack打包不能提取公共模块，先放弃治疗，找到原因再改进
// const routes = require('./routes/index').default(store)
// const App = (
//   <Provider store={store}>
//     <Router history={history} children={routes} key={key} />
//   </Provider>
// )

  const App = (
    <div>Hello world</div>
  )

  ReactDOM.render(App, mountNode)
}

render()