import { createAction, createFetchAction, createHandlers, createReducer } from 'store/utils'
import moment from 'moment'

/**
 * 定义action type常量
 * @type {string}
 */
const USER = 'USER'
const LOGIN = 'LOGIN'
const FORGETPSW = 'FORGETPSW'
const UPDATEAUTH = 'UPDATEAUTH'
const MENUQUERY = 'MENUQUERY'
const LOGOUT = 'LOGOUT'
const CLEARLOGIN = 'CLEARLOGIN'

const GETTOKEN = 'GETTOKEN'
const QUERYSYSDATE = 'QUERYSYSDATE'

const PASSWORD_MODIFY = 'PASSWORD_MODIFY'

const BEGIN_LOADING = 'BEGIN_LOADING'
const END_LOADING = 'END_LOADING'
const MODIFYPWD='MODIFYPWD'
/**
 * 创建action事件函数
 * @type {function}
 */

export const setUser = createAction(USER)

// export const login = createFetchAction(LOGIN, '/wss-inner-admin.login')
export const login = createFetchAction(LOGIN, '/los/wss-inner-admin.login');

export const forgetPsw = createFetchAction(FORGETPSW, '/los/wss-inner-system.forgetPsw');

export const logout = createFetchAction(LOGOUT, '/los/wss-inner-admin.logout')

export const clearLogin = createAction(CLEARLOGIN)

export const updateAuth = createAction(UPDATEAUTH)

export const menuQuery = createFetchAction(MENUQUERY, '/los/wss-inner-operation.queryMenuByStaff')

export const modifyPassword = createFetchAction(PASSWORD_MODIFY, '/los/wss-inner-system.modifyPsw');


export const getToken = createFetchAction(GETTOKEN, '/esa/nts_cfb_order_prod.getToken')

export const queryDate = createFetchAction(QUERYSYSDATE, '/esa/nts_cfb_prod_order.queryDate')

export const modifyPwd = createFetchAction(MODIFYPWD,'/esa/nts_cfb_prod_login.modifyPwd')

export const beginLoading = createAction(BEGIN_LOADING)
export const endLoading = createAction(END_LOADING)

export const auth = {
  getSelf: () => {
    return sessionStorage.self && JSON.parse(sessionStorage.self)
  },
  logout: (cb) => {
    // sessionStorage.loggedIn = false
    delete sessionStorage.loggedIn
    delete sessionStorage.self
    if (cb) cb()
    // this.onChange(false)
  },
  loggedIn: () => {
    return !!sessionStorage.loggedIn
  },
  onChange: () => {}
}

/**
 * 如需要批量导出方便引用则可定义此常量，否则可以忽略
 */
export const actions = {
  setUser,
  login,
  logout
}

const ACTION_HANDLERS = {
  [MENUQUERY] : (state,payload) => {
    return Object.assign({}, state, {MENU: payload});
  },
  [UPDATEAUTH]: (state, payload) => Object.assign({}, state, {loggedIn: payload}),
  [LOGIN]: (state, payload) => {
    const userinfo = {
      loggedIn: true,
      USER: {
        userName : payload.model.userName,
        userStatus : payload.model.userStatus,
        deptName : payload.model.deptName,
        loginName : payload.model.loginName,
        roleList : payload.model.roleList,
        userId : payload.model.userId,
      }
    }
    sessionStorage.self = JSON.stringify(userinfo.USER)
    sessionStorage.loggedIn = userinfo.loggedIn
    return Object.assign({}, state, userinfo)
  },
  [PASSWORD_MODIFY]: (state, payload) => {
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
    auth.logout()
    return Object.assign({}, state, {loggedIn: false, USER: {}, MENU : {}})
  },
  [CLEARLOGIN]: (state, payload) => {
    auth.logout()
    return Object.assign({}, state, {loggedIn: false, USER: {}, MENU : {}})
  },
  [QUERYSYSDATE]: (state, payload) => {
    moment.locale('zh-CN')
    return Object.assign({}, state, {sysDateL: moment(payload.sysDate).format('L'), sysDate: moment(payload.sysDate).format('LL')})
  },
  [BEGIN_LOADING]: (state, payload) => Object.assign({}, state, {loading: state.loading + 1}),
  [END_LOADING]: (state, payload) => Object.assign({}, state, {loading: state.loading - 1})
}

/**
 * 创建reducer函数
 * 参数一（必输）：设置默认store对象属性，无需设置可传入空对象{}
 * 参数二（必输）：传入触发action事件后调用的回调函数，可以使用createHandlers函数批量生成也可自定义
 * @type {function}
 */
export default createReducer({
  isFetching: false,
  loggedIn: auth.loggedIn(),
  sysDateL: '',
  sysDate: '',
  USER: auth.getSelf() || {},
  loading: 0
}, createHandlers(ACTION_HANDLERS))
