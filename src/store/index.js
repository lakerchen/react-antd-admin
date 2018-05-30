import browserHistory from 'utils/history';
import createStore from 'store/createStore';

const store = createStore(window.__INITIAL_STATE__,browserHistory);

store.asyncReducers = {}

export default store;