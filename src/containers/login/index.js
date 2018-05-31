import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import loader from 'common/loader';
import { createHandlers, createReducer, createFetchAction } from 'store/utils';
import { injectReducer } from 'store/reducers';
import { LOGIN } from 'constants/actionTypes';
import store from 'store';
import { login } from 'store/core';

const initialState = {
  
};

const actionHandlers = {};

const mapActionCreators = {
  login
}

const mapStateToProps = (state) => ({
  core: state.core,
  login: state.login,
})

const Login = loader(() => import('components/login'));

export default withRouter(connect(mapStateToProps, mapActionCreators)(Login))
