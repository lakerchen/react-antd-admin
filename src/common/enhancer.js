import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

export function enhancer (comp, mapStateToProps, mapActionCreators) {
    class WrapCompoment extends React.Component {
        render () {
            return (
                <comp />
            );
        }
    }
    return withRouter(connect(mapStateToProps, mapActionCreators)(comp));
}