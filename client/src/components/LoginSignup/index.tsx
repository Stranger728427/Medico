import { useState } from "react";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Modal, Form, Input, message, Typography } from "antd";

interface User {
  username: string;
  email: string;
  password: string;
}

const LoginSignup = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [goSignup, setGoSignup] = useState<boolean>(false);
  const [goLogin, setGoLogin] = useState<boolean>(false);
  const [login, setLogin] = useState<boolean>(false);

  const [form] = Form.useForm();

  const FormValues = Form.useWatch<User>([], { form: form });

  const [StateOfLoginSignup, setStateOfLoginSignup] =
    useState<string>("Signup");

  // Handle Modal
  const showModal = () => {
    setVisible(true);
  };

  const closeModal = () => {
    setVisible(false);
  };

  // Handle submit

  const handleSubmit = () => {
    setLoading(true);

    console.log("Received values:", FormValues.username);

    setTimeout(() => {
      setLoading(false);
      setVisible(false);
    }, 2000);

    setLogin(true);

    message.success(
      `${
        goSignup ? `${FormValues.username}Signup` : `${FormValues.email}Login`
      } successful`
    );
  };

  // Handle state of login and signup
  const handleStateOfLoginSignup = () => {
    setStateOfLoginSignup(goSignup ? "Signup" : "Login");
    setGoSignup(!goSignup);
    setGoLogin(!goLogin);
  };

  return (
    <div>
      {login ? (
        <Avatar
          size="large"
          icon={<UserOutlined />}
          style={{
            marginRight: "10px",
            cursor: "pointer",
            backgroundColor: "#f56a00",
          }}
          onClick={showModal}
        />
      ) : (
        <Button type="primary" onClick={showModal}>
          Login
        </Button>
      )}
      <Modal
        title="Login/Signup"
        open={visible}
        onCancel={closeModal}
        footer={null}
      >
        <Form
          form={form}
          name={goSignup ? "Signup" : "Login"}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: false }}
          // autoComplete="off"
          onFinish={handleSubmit}
        >
          {goSignup ? (
            <Form.Item
              label="Username"
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input />
            </Form.Item>
          ) : null}

          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input your Email!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          {goSignup ? (
            <Form.Item
              label="Confirm Password"
              name="confirmPassword"
              rules={[
                { required: true, message: "Please confirm your password!" },
              ]}
            >
              <Input.Password />
            </Form.Item>
          ) : null}

          <Form.Item wrapperCol={{ offset: 12, span: 16 }}>
            <Button type="primary" htmlType="submit" loading={loading}>
              Submit
            </Button>
          </Form.Item>
        </Form>

        <Typography.Link italic strong onClick={handleStateOfLoginSignup}>
          <Typography.Text type="secondary">
            You Don't Have Account Then Go To:{" "}
          </Typography.Text>
          {StateOfLoginSignup}`
        </Typography.Link>
      </Modal>
    </div>
  );
};

export default LoginSignup;
