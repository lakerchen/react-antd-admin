import { connect } from 'react-redux';
import About from 'components/dashboard/about';
import { withRouter } from 'react-router';

const mapActionCreators = {

}

const mapStateToProps = (state) => ({
  core: state.core
})

export default connect(mapStateToProps, mapActionCreators)(withRouter(About))
