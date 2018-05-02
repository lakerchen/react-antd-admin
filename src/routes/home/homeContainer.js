import { connect } from 'react-redux';
import Home from 'components/home';
import { withRouter } from 'react-router';

const mapActionCreators = {

}

const mapStateToProps = (state) => ({
  core: state.core
})

export default connect(mapStateToProps, mapActionCreators)(withRouter(Home))
