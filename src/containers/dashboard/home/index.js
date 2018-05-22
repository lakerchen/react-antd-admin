import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import loadComponent from 'common/loader';

const mapActionCreators = {

}

const mapStateToProps = (state) => ({
  core: state.core
})

const Home = loadComponent(() => import('components/dashboard/home'));

export default withRouter(connect(mapStateToProps, mapActionCreators)(Home))
