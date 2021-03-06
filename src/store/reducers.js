import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import core from './core';

export const appReducers = (asyncReducers) => {
  return combineReducers({
    core,
    router,
    ...asyncReducers,
  });
}

export const rootReducer = (asyncReducers) => (state, action) => {
  return appReducers(asyncReducers)(state, action);
}

export const injectReducer = (store, { key, reducer }) => {
  store.asyncReducers[key] = reducer
  store.replaceReducer(rootReducer(store.asyncReducers))
}


export default rootReducer;
