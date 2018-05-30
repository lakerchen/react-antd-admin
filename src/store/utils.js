export function createHandlers (...ACTION_TYPES) {
    return ACTION_TYPES.reduce((ACTION_HANDLERS, param) => {
      if (typeof param === 'string') {
        ACTION_HANDLERS[param] = (state, action) => Object.assign({}, state, {
          [param]: action
        })
      }
      if (typeof param === 'object') {
        for (let item in param) {
          ACTION_HANDLERS[item] = (state, action) => param[item](state, action)
        }
      }
      return ACTION_HANDLERS
    }, {})   
  }

  export function createReducer (initialState, ACTION_HANDLERS) {
    return (state = initialState, action) => {
      let handler = ACTION_HANDLERS[action.type]
  
      /* ie does not support endsWith */
      const requestType = action.type.match(/.*_REQUEST$/g)
      const successType = action.type.match(/.*_SUCCESS$/g)
      const failureType = action.type.match(/.*_FAILURE$/g)
  
      if (requestType) {
        state = Object.assign({}, state, {
          isFetching: true
        })
      }
  
      if (successType) {
        state = Object.assign({}, state, {
          isFetching: false
        })
        if (action.response) {
          handler = ACTION_HANDLERS[action.type.split('_SUCCESS')[0]]
          return handler ? handler(state, action.response) : state
        }
      }
  
      if (failureType) {
        state = Object.assign({}, state, {
          isFetching: false
        })
      }
  
      return handler ? handler(state, action) : state
    }
  }

  export function createAction (actionType) {
    return (value) => {
      return {
        type: actionType,
        payload: value
      }
    }
  }