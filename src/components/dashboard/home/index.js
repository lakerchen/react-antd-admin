import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, Row, Col  } from 'antd';

export default class Home extends Component {
  render () {
    return (
      <div>
        <Row gutter={16}>
          <Col span={8}>
            <Card title="待办事项" bordered={false}>
              <p>待审核订单（2）</p>
              <p>审核退回处理（10）</p>
              <p>跑批确认（1）</p>
              <p>产品到期（5）</p>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="公司新闻" bordered={false}>
              <p>震惊！程序员在办公室做这种事</p>
              <p>锤子科技新品TNT2000今日首发，售价十万元</p>
              <p>橡胶果实能力大揭秘</p>
              <p>因台风关系明天放假一天</p>
              <p>钱很多有限公司获得2018年度最佳雇主奖</p>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="系统提醒" bordered={false}>
              <p>客户文斯莫克·山治今天生日，记得给他发送生日祝福短信哦</p>
              <p>系统将于今晚24点进行维护</p>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}