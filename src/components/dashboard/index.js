import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, Route, Switch } from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Icon, Divider, Modal } from 'antd';
import CreateOrder from 'containers/dashboard/order/create';
import EditOrder from 'containers/dashboard/order/edit';
import Home from 'containers/dashboard/home';
import Order from 'containers/dashboard/order';
import NotFound from 'containers/notfound';
import About from 'containers/dashboard/about';

import menuList from 'constants/menuList';
import { guid } from 'utils/common';

import './style.less';

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

const renderMenuList = (menuList, keyPrefix = '0') => {
  return (
    <Menu theme="dark" defaultSelectedKeys={['0-0']} mode="inline">
      {
        menuList.map((item, index) => {
          if (!Array.isArray(item.subMenus)) {
            return (
              <Menu.Item key={`${keyPrefix}-${index}`}>
                <Link to={item.path}>
                  <Icon type={item.icon} />
                  <span>{item.label}</span>
                </Link>
              </Menu.Item>
            );
          } else {
            return (
              <SubMenu
                key={`${keyPrefix}-${index}`}
                title={<span><Icon type={item.icon} /><span>{item.label}</span></span>}
              >
                {renderMenuList(item.subMenus, `${keyPrefix}-${index}`)}
              </SubMenu>
            );
          }
        })
      }
    </Menu>
  );
}

export default class LayoutView extends React.Component {
  state = {
    collapsed: false,
  };

  componentDidMount () {
    document.getElementById('root').setAttribute('style', '');
  }
 
  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  }

  logout = () => {
    Modal.confirm({
      content: '您确认要退出登录吗？',
      onOk: () => {
        this.props.logout().then(res => {
          if (/_SUCCESS$/.test(res.type)) {
            this.props.history.push('/login');
          }
        });
      }
     });
  }
 
  render() {
    const { USER = {} } = this.props.core;
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="admin-logo" />
          {renderMenuList(menuList)}
        </Sider>
        <Layout>
          <Header className="admin-header">
            <div className="admin-profile">
              欢迎您：{USER.userName} <Divider type="vertical" /> <a href="javascript:void(0)" onClick={this.logout}>退出</a>
            </div>
          </Header>
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <Switch>
              <Route path="/dashboard/" exact component={Home}/>
              <Route path="/dashboard/order" exact component={Order}/>
              <Route path="/dashboard/order/create" component={CreateOrder}/>
              <Route path="/dashboard/order/edit/:orderno" component={EditOrder}/>
              <Route path="/dashboard/about" component={About}/>
              <Route component={NotFound}/>
            </Switch>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2016 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  }
}