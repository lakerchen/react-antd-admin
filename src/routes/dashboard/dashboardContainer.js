import { connect } from 'react-redux';
import Dashboard from 'components/dashboard';
import { withRouter } from 'react-router';

const mapActionCreators = {

}

const mapStateToProps = (state) => ({
  core: state.core
})

export default connect(mapStateToProps, mapActionCreators)(withRouter(Dashboard))
