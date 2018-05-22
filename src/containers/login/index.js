import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import loadComponent from 'common/loader';

const mapActionCreators = {

}

const mapStateToProps = (state) => ({
  core: state.core
})

const Login = loadComponent(() => import('components/login'));

export default withRouter(connect(mapStateToProps, mapActionCreators)(Login))
