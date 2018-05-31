let API_ROOT = `${location.protocol}//${location.host}`;

//本地接口
if(__DEV__) {
  API_ROOT = API_ROOT + '/api';
}

//测试环境
if(__TEST__){
  // API_ROOT = '';
}

export default {
  api: API_ROOT,
}
