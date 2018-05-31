import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';

export default class Notfound extends Component {
  render () {
    const style = {
      position: 'relative',
      textAlign: 'center',
      top: '100px',
      fontSize: '20px',
      color: '#aaa'
    };
    return (
      <div style={style}>
        <Icon type="frown" />您访问的页面不存在，不要再挣扎了，没有用的!
      </div>
    )
  }
}