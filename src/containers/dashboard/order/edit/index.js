import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import loader from 'common/loader';

const mapActionCreators = {

}

const mapStateToProps = (state) => ({
  core: state.core
})

const EditOrder = loader(() => import('components/dashboard/order/edit'));

export default withRouter(connect(mapStateToProps, mapActionCreators)(EditOrder))
