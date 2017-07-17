import { connect } from 'react-redux';
import Login from 'components/login';

const mapActionCreators = {}

const mapStateToProps = (state) => ({
  // core: state.core
})

export default connect(mapStateToProps, mapActionCreators)(Login)