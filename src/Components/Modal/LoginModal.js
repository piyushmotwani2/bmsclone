import "./LoginModal.css";
import { React } from "react";
import { Input, Button, Typography, Space, Layout, Form } from "antd";

const { Header, Content } = Layout;

const LoginModal = (props) => {
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const signIn = (values) => {
    console.log(values);
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: values.user.username,
        password: values.user.password,
      }),
    };
    fetch("https://f52cf9c30e58.ngrok.io/api/login/", requestOptions).then(
      (response) => {
        console.log(response.json());
      }
    );
  };

  return (
    <Space className="modal" size="middle" align="center">
      <Layout className="login">
        <Header>
          <Typography className="login-header">Sign In</Typography>
        </Header>
        <Content>
          <Form {...layout} name="nest-messages" onFinish={signIn}>
            <Form.Item
              name={["user", "username"]}
              label="Username"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name={["user", "password"]}
              label="Password"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Content>
      </Layout>
      <Layout className="hello">
        <Header>
          <Typography className="hey-there">Hey, There!</Typography>
        </Header>
        <Content>
          <Typography className="hello-text">
            You are new here? Let's set you up
          </Typography>
          <Button className="signin-button" onClick={props.moveToSignup}>
            Sign Up
          </Button>
        </Content>
      </Layout>
    </Space>
  );
};

export default LoginModal;
