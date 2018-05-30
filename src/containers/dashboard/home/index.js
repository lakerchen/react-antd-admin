import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import loader from 'common/loader';

const mapActionCreators = {

}

const mapStateToProps = (state) => ({
  core: state.core
})

const Home = loader(() => import('components/dashboard/home'));

export default withRouter(connect(mapStateToProps, mapActionCreators)(Home))
