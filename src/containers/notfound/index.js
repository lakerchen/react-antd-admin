import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import loadComponent from 'common/loader';

const mapActionCreators = {

}

const mapStateToProps = (state) => ({
  core: state.core
})

const Notfound = loadComponent(() => import('components/notfound'));

export default withRouter(connect(mapStateToProps, mapActionCreators)(Notfound))
