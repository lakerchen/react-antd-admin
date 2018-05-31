import { beginLoading, endLoading } from 'store/core';

const loading = store => next => action => {
  if (action.type.match(/LOGOUT.*/g)) {
    return next(action)
  }
  if (action.type.match(/.*_REQUEST$/g)) {
    if(!action.noLoader){
      next(beginLoading())
    }
  } else if (action.type.match(/.*_SUCCESS$/g) ||
    action.type.match(/.*_FAILURE$/g) ||
    action.type.match(/CLEARLOGIN/g)) {
    if(!action.noLoader){
      next(endLoading())
    }
  }
  return next(action)
}

export default loading;
