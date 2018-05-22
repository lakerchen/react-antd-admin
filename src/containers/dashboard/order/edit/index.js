import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import loadComponent from 'common/loader';

const mapActionCreators = {

}

const mapStateToProps = (state) => ({
  core: state.core
})

const EditOrder = loadComponent(() => import('components/dashboard/order/edit'));

export default withRouter(connect(mapStateToProps, mapActionCreators)(EditOrder))
