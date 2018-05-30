import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import loader from 'common/loader';

const mapActionCreators = {

}

const mapStateToProps = (state) => ({
  core: state.core
})

const Login = loader(() => import('components/login'));

export default withRouter(connect(mapStateToProps, mapActionCreators)(Login))
