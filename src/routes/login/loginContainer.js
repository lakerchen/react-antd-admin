import { connect } from 'react-redux';
import Login from 'components/login';
import { withRouter } from 'react-router';

const mapActionCreators = {

}

const mapStateToProps = (state) => ({
  core: state.core
})

export default connect(mapStateToProps, mapActionCreators)(withRouter(Login))
