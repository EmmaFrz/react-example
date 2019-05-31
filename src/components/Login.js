import React from 'react';
import MainLayout from './MainLayout.js';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { Link } from 'react-router-dom'
import 'antd/dist/antd.css';
import './Login.css';

function Layout(props){
	return(
		<MainLayout>
      <div style={{ margin: "0px 0px 0px 38%"}}>
        <Form className="login-form" onSubmit={props.handleSubmit}>
          <h1>Sign in</h1>
          <Form.Item>
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
              name="username"
            />
          </Form.Item>
          <Form.Item>
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
              name="password"
            />
          </Form.Item>
          <Form.Item>
            <Checkbox>Remember me</Checkbox>
            <Link className="login-form-forgot" to="/">
              Forgot password
            </Link>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
            Or <Link to="/">register now!</Link>
          </Form.Item>
        </Form>         
      </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
		</MainLayout>
	)
}
export default Layout; 