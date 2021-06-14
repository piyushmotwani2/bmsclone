import "./SignupModal.css";
import { React } from "react";
import { Input, Button, Typography, Space, Layout, Form } from "antd";

const { Header, Content } = Layout;

const SignupModal = (props) => {
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };

  const signUp = (values) => {
    console.log(values);
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name: values.user.first_name,
        last_name: values.user.last_name,
        email: values.user.email,
        username: values.user.username,
        password: values.user.password,
        confirm_password: values.user.confirm_password,
      }),
    };
    fetch("https://f52cf9c30e58.ngrok.io/api/signup/", requestOptions).then(
      (response) => {
        console.log(response.json());
      }
    );
  };

  return (
    <Space className="modal" size="middle" align="center">
      <Layout className="hello">
        <Header>
          <Typography className="hey-there">Hey, There!</Typography>
        </Header>
        <Content>
          <Typography className="hello-text">
            Already have an account login now
          </Typography>
          <Button className="signin-button" onClick={props.moveToSignin}>
            Sign In
          </Button>
        </Content>
      </Layout>
      <Layout className="login">
        <Header>
          <Typography className="login-header">Sign Up</Typography>
        </Header>
        <Content>
          <Form {...layout} name="nest-messages" onFinish={signUp}>
            <Form.Item
              name={["user", "first_name"]}
              label="First Name"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name={["user", "last_name"]}
              label="Last Name"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name={["user", "email"]}
              label="Email"
              rules={[
                {
                  type: "email",
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
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
            <Form.Item
              name={["user", "confirm_password"]}
              label="Confirm Password"
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
    </Space>
  );
};

export default SignupModal;
