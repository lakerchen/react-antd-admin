import React from 'react';
import Loadable from 'react-loadable';
import Loading from 'components/loading';

export default function loader(loadFunc) {
    return Loadable({
        loader: loadFunc,
        loading: Loading,
        render(loaded, props) {
            // react-router传递进来的match、history、location等，通过props传递给组件
            let Component = loaded.default;
            return <Component {...props}/>;
        }
    });
} 