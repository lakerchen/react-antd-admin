import React from 'react';
import Loadable from 'react-loadable';
import Loading from 'components/loading';

export default function loadComponent (loadFunc) {
    const LoadableAnotherComponent = Loadable({
        loader: loadFunc,
        loading: Loading
    });
    return class MyComponent extends React.Component {
        render() {
            return <LoadableAnotherComponent/>;
        }
    }
}