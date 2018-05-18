import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import loadComponent from 'common/loader';

const mapActionCreators = {

}

const mapStateToProps = (state) => ({
  core: state.core
})

const CreateOrder = loadComponent(() => import('components/dashboard/order/create'));

export default connect(mapStateToProps, mapActionCreators)(withRouter(CreateOrder))
