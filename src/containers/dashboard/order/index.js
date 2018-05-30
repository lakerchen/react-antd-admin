import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import loader from 'common/loader';
import { createHandlers, createReducer, createAction } from 'store/utils';
import { injectReducer } from 'store/reducers';
import { QUERY_ORDER_LIST } from 'constants/actionTypes';
import store from 'store';

const initialState = {
  orderList: [],
};

const queryOrderList = createAction(QUERY_ORDER_LIST);

const actionHandlers = {};

actionHandlers[QUERY_ORDER_LIST] = (state, payload) => {
  return {
    ...state,
    orderList: [{
      key: '1',
      orderNo: '0001',
      date: '2018-01-01',
      address: '西湖区湖底公园1号'
    }, {
      key: '2',
      orderNo: '0002',
      date: '2018-02-01',
      address: '北京路2号'
    }]
  };
};

const reducer = createReducer(initialState, createHandlers(actionHandlers));

injectReducer(store, { key: 'order', reducer});

const mapActionCreators = {
  queryOrderList,
};

const mapStateToProps = (state) => ({
  core: state.core,
  order: state.order,
});

export default withRouter(connect(mapStateToProps, mapActionCreators)(
  // import(var)格式不能被webpack支持
  loader(() => import('components/dashboard/order'))
))
