import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import loadComponent from 'common/loader';

const mapActionCreators = {

}

const mapStateToProps = (state) => ({
  core: state.core
})

const Dashboard = loadComponent(() => import('components/dashboard'));

export default connect(mapStateToProps, mapActionCreators)(withRouter(Dashboard))
