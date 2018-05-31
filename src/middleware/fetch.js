import { FETCH } from './constants';
import { message, Modal } from 'antd';
import axios from 'axios';
import md5 from 'js-md5';
import api from 'common/api';
import conf from 'constants/conf';
import createHashHistory from 'history/createHashHistory'

let isErrorTipOn = false;

const hashHistory = createHashHistory();

export const API_ROOT = conf.api;

export default ({ dispatch, getState }) => next => action => {
  if (typeof action === 'object') {
    const ajaxAPI = action[FETCH];
    if (typeof ajaxAPI === 'undefined') {
      return next(action);
    }

    let url = ajaxAPI.url;

    const {
      options,
      type,
      payload,
    } = ajaxAPI;

    if (typeof url === 'function') {
      url = url(getState());
    }

    if (typeof url !== 'string') {
      throw new Error('Specify a string url.');
    }

    const actionWith = (data) => {
      const finalAction = Object.assign({}, action, data);
      delete finalAction[ FETCH ];
      return finalAction;
    }

    next(actionWith({ type: `${type}_REQUEST`, noLoader: options.noLoader }));

    const jsonStr = JSON.stringify(formateData(payload));
    const summary = md5(jsonStr);

    return axios({
      url: (url.indexOf(API_ROOT) === -1) ? `${API_ROOT}${url}` : url,
      method: options.method || 'post',
      data: jsonStr,
      withCredentials: true,
      headers: {
        summary,
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
    .then((response) => {
      if (!response || !response.data) {
        return;
      }
      const model = { ...response.data, _params: payload };
      const { responseCode: code, responseMsg: msg } = model;

      switch (code) {
        case '000000':
            return next(actionWith({
            response: model,
            type: `${type}_SUCCESS`,
            noLoader: options.noLoader,
            }));
        case 'user.invalid':
            if (!isErrorTipOn) {
            isErrorTipOn = true;
            message.warning('登陆超时,请登录后重试', 2, () => isErrorTipOn = false );
            }
            setTimeout(() => { hashHistory.replace('/login') }, 1000);
            return next(actionWith({ type: 'CLEARLOGIN' }));
        default:
            if (api[url] && typeof api[url][code] === 'function') {
            api[url][code](msg);
            } else {
            Modal.error({
                title: '错误信息',
                content: msg || '接口返回异常！'
            });
            }

        return next(actionWith({
          response: model,
          type: `${type}_FAILURE`,
          noLoader : options.noLoader,
        }));
      }
    })
    .catch((err) => {
      message.error('通讯失败');
      return next(actionWith({ response: err, type: `${type}_FAILURE`, noLoader : options.noLoader }));
    });
  }
}

const formateData = (data) => {
  // BUG 这个地方有坑，JSON.stringify不能保证序列化后属性的顺序，摘要后台可能验证不通过
  return Object.assign({
    _channel_id : '03'
  }, data || {});
}
