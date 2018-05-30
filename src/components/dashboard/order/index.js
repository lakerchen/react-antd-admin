import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Table, Button } from 'antd';

export default class Order extends Component {
  handleClick = () => {
    this.props.queryOrderList();
  }

  render () {
    const dataSource = this.props.order.orderList;
    const columns = [{
      title: '订单号',
      dataIndex: 'orderNo',
    }, {
      title: '日期',
      dataIndex: 'date',
    }, {
      title: '住址',
      dataIndex: 'address',
    }, {
      title: '操作',
      dataIndex: 'opt',
      render: (text, record) => {
        return (
          <span>
            <Link to={"/dashboard/order/edit/"+record.orderNo}>修改</Link>|
            <a href=";">删除</a>
          </span>
        );
      }
    }
  ];
  

    return (
      <div>
        <Button onClick={this.handleClick}>查询</Button>
        <Table dataSource={dataSource} columns={columns} />
      </div>
    )
  }
}