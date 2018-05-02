import { connect } from 'react-redux';
import Order from 'components/dashboard/order';
import { withRouter } from 'react-router';

const mapActionCreators = {

}

const mapStateToProps = (state) => ({
  core: state.core
})

export default connect(mapStateToProps, mapActionCreators)(withRouter(Order))
