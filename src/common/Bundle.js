import React, { Component, PropTypes } from 'react';

class Bundle extends Component {
  state = {
    // short for "module" but that's a keyword in js, so "mod"
    mod: null
  }

  componentWillMount() {
    console.log('componentWillMount', this.props.load)
    this.load(this.props)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.load !== this.props.load) {
      this.load(nextProps)
    }
  }

  load(props) {
    this.setState({
      mod: null
    })
    console.log('props.load', props.load)
    props.load((mod) => {
      console.log('mod',mod)
      this.setState({
        // handle both es imports and cjs
        mod: mod.default ? mod.default : mod
      })
    })
  }

  render() {
    return this.state.mod ? this.props.children(this.state.mod) : null
  }
}

Bundle.propTypes = {
  load: PropTypes.func,
  children: PropTypes.func
};


export default Bundle;