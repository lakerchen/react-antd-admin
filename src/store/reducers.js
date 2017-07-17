import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

export const appReducers = (asyncReducers) => {
  return combineReducers({
    router,
    ...asyncReducers,
  });
}

export const rootReducer = (asyncReducers) => (state, action) => {
  return appReducers(asyncReducers)(state, action);
}

export default rootReducer;
