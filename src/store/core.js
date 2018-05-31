import { createAction, createFetchAction, createHandlers, createReducer } from './utils';
import { auth } from 'common/auth';
import { QUERY_MENU, UPDATE_AUTH, LOGIN, LOGOUT, PSW_MODIFY, CLEAR_LOGIN,
         QUERY_SYSDATE, BEGIN_LOADING, END_LOADING, FORGET_PSW } from 'constants/actionTypes';

export const clearLogin = createAction(CLEAR_LOGIN)
export const updateAuth = createAction(UPDATE_AUTH)
export const beginLoading = createAction(BEGIN_LOADING)
export const endLoading = createAction(END_LOADING)
export const login = createFetchAction(LOGIN, '/login')
export const forgetPsw = createFetchAction(FORGET_PSW, '/forgetPsw')
export const logout = createFetchAction(LOGOUT, '/logout')
export const queryMenu = createFetchAction(QUERY_MENU, '/menu')
export const queryDate = createFetchAction(QUERY_SYSDATE, '/queryDate')
export const modifyPwd = createFetchAction(PSW_MODIFY,'/modifyPwd')

const actionHandlers = {
  [QUERY_MENU]: (state, payload) => ({
    ...state,
    MENU: payload.model.menuList,
  }),
  [UPDATE_AUTH]: (state, payload) => ({
    ...state,
    loggedIn: payload,
  }),
  [LOGIN]: (state, payload) => {
    const userinfo = {
      loggedIn: true,
      USER: {
        userName: payload.model.userName,
        userStatus: payload.model.userStatus,
        deptName: payload.model.deptName,
        loginName: payload.model.loginName,
        roleList: payload.model.roleList,
        userId: payload.model.userId,
      }
    }
    sessionStorage.self = JSON.stringify(userinfo.USER);
    sessionStorage.loggedIn = userinfo.loggedIn;
    return {
      ...state,
      ...userinfo,
    };
  },
  [PSW_MODIFY]: (state, payload) => {
    const user = {
      ...state.USER,
      userStatus: '01',
    };
    sessionStorage.self = JSON.stringify(user);
    return {
      ...state,
      USER: user,
    };
  },
  [LOGOUT]: (state, payload) => {
    auth.logout();
    return {
      ...state,
      loggedIn: false, 
      USER: {}, 
      MENU: {},
    };
  },
  [CLEAR_LOGIN]: (state, payload) => {
    auth.logout();
    return {
      ...state,
      loggedIn: false, 
      USER: {}, 
      MENU: {},
    };
  },
  [QUERY_SYSDATE]: (state, payload) => {
    moment.locale('zh-CN');
    return Object.assign({}, state, {sysDateL: moment(payload.sysDate).format('L'), sysDate: moment(payload.sysDate).format('LL')});
  },
  [BEGIN_LOADING]: (state, payload) => Object.assign({}, state, {loading: state.loading + 1}),
  [END_LOADING]: (state, payload) => Object.assign({}, state, {loading: state.loading - 1})
}

export default createReducer({
  isFetching: false,
  loggedIn: auth.loggedIn(),
  sysDateL: '',
  sysDate: '',
  USER: auth.getSelf() || {},
  loading: 0
}, createHandlers(actionHandlers))