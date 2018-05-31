import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import loader from 'common/loader';
import { logout, queryMenu } from 'store/core';

const mapActionCreators = {
  logout,
  queryMenu,
}

const mapStateToProps = (state) => ({
  core: state.core
})

const Dashboard = loader(() => import('components/dashboard'));

export default withRouter(connect(mapStateToProps, mapActionCreators)(Dashboard))
