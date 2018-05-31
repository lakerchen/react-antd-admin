let api = {};

export const registerCode = (url,handlers) => {
  if( typeof url === 'string' && !(url in api) ){
    let check = true;
    if(typeof handlers === 'object'){
      for(let item in handlers){
        if(typeof handlers[item] !== 'function'){
          check = false;
        }
      }
    }else{
      check = false;
    }
    if(check){
      api[url] = handlers;
    }else{
      console.warn('The handler passed into registerCode must be a function.')
    }
  }
};

export default api;