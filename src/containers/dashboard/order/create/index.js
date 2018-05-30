import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import loader from 'common/loader';

const mapActionCreators = {

}

const mapStateToProps = (state) => ({
  core: state.core
})

const CreateOrder = loader(() => import('components/dashboard/order/create'));

export default withRouter(connect(mapStateToProps, mapActionCreators)(CreateOrder))
