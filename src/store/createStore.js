import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import ajaxapi from '../middleware/fetch';
import { rootReducer } from './reducers';
import loading from '../middleware/loading';


export default (initialState = {}, history) => {
  let middleware = applyMiddleware(thunk, ajaxapi, loading, routerMiddleware(history))

  // Use DevTools chrome extension in development
  // if (__DEBUG__) {
    const devToolsExtension = window.devToolsExtension

    if (typeof devToolsExtension === 'function') {
      middleware = compose(middleware, devToolsExtension())
    }
  // }

  const store = createStore(rootReducer(), initialState, middleware)

  // store.asyncReducers = {}

  return store;
}
