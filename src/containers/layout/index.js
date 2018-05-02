import { connect } from 'react-redux';
import Layout from 'components/layout';

const mapActionCreators = {}

const mapStateToProps = (state) => ({
  // core: state.core
})

console.log('layout in container',Layout)

export default connect(mapStateToProps, mapActionCreators)(Layout)