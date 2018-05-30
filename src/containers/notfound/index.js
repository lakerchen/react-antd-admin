import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import loader from 'common/loader';

const mapActionCreators = {

}

const mapStateToProps = (state) => ({
  core: state.core
})

const Notfound = loader(() => import('components/notfound'));

export default withRouter(connect(mapStateToProps, mapActionCreators)(Notfound))
