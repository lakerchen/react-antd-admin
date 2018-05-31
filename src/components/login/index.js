import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Form, Icon, Input, Button, Checkbox } from 'antd';

import './style.less';

const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
  componentDidMount () {
    document.getElementById('root').setAttribute('style', 'width:100%;height:100%;overflow:hidden');
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {  
        this.props.login(values).then(res => {
          console.log('res',res)
          if (/_SUCCESS$/.test(res.type)) {
            this.props.history.push('/dashboard');
          }
        });
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div id="admin-login-container">
        <div id="admin-login-box"> 
          <Form onSubmit={this.handleSubmit} className="login-form">
            <FormItem>
              <header>金融业务后台管理系统</header>
            </FormItem>
            <FormItem>
              {getFieldDecorator('userName', {
                rules: [{ required: true, message: '请输入用户名' }],
              })(
                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: '请输入密码' }],
              })(
                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
              })(
                <Checkbox>记住我</Checkbox>
              )}
              <a className="login-form-forgot" href="">忘记密码</a>
              <Button type="primary" htmlType="submit" className="login-form-button">
                登录
              </Button>
              <a href="">立即注册</a>
            </FormItem>
          </Form>
        </div>
      </div>
    );
  }
}

export default Form.create()(NormalLoginForm);