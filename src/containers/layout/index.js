import { connect } from 'react-redux';
import Layout from 'components/layout';

const mapActionCreators = {}

const mapStateToProps = (state) => ({
  // core: state.core
})


export default connect(mapStateToProps, mapActionCreators)(Layout)