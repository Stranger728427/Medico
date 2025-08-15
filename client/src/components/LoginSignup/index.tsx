import { useDispatch } from "react-redux";

import {
  Avatar,
  Button,
  Form,
  Input,
  message,
  Modal,
  Select,
  Typography,
} from "antd";

import Profile from "../Profile";
import { UserOutlined } from "@ant-design/icons";
import { useState } from "react";
import { userAuth } from "../../Api/LoginSignupAPi";
import { login, logout, updateUserAuth } from "../../redux/slice/UserSlice";

const LoginSignup = () => {
  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isDrawerVisible, setIsDrawerVisible] = useState<boolean>(false);

  const [action, setAction] = useState("Login");

  const [form] = Form.useForm();
  const FormValues = Form.useWatch([], { form: form });

  const { SignupApi, LoginApi, userLogout } = userAuth();

  const handleClose = () => {
    setIsModalOpen(false);
    form.resetFields();
  };
  const handleOpen = () => {
    setIsModalOpen(true);
  };

  const handleCloseProfileDrawer = () => {
    setIsDrawerVisible(false);
  };

  const handleOpenProfileDrawer = () => {
    setIsDrawerVisible(true);
  };

  const handleSignupSubmit = async () => {
    try {
      await SignupApi.mutateAsync(FormValues);
      dispatch(updateUserAuth(FormValues));
      handleClose();
    } catch (error: any) {
      message.error(error.message) || "error while signup";
    }
  };

  const handleLoginSubmit = async () => {
    try {
      await LoginApi.mutateAsync(FormValues);
      dispatch(login(FormValues));
      handleClose();
    } catch (error: any) {
      message.error(error.message) || "error while Login";
    }
  };

  const handleLogout = async () => {
    try {
      await userLogout.mutateAsync();
      dispatch(logout());
      handleCloseProfileDrawer();
      message.success("Logout Success");
    } catch (error) {
      message.error("Logout failed");
    }
  };

  return (
    <div>
      {LoginApi.isSuccess && !userLogout.isSuccess ? (
        <>
          <Avatar
            size="large"
            icon={<UserOutlined />}
            style={{
              marginRight: "10px",
              cursor: "pointer",
              backgroundColor: "#f56a00",
            }}
            onClick={handleOpenProfileDrawer}
          />

          <Profile
            isDrawerVisible={isDrawerVisible}
            onCloseDrawer={handleCloseProfileDrawer}
            handleLogout={handleLogout}
          />
        </>
      ) : (
        <Button
          type="primary"
          onClick={handleOpen}
          loading={LoginApi.isPending}
        >
          Login
        </Button>
      )}

      <Modal
        title={action}
        open={isModalOpen}
        onCancel={handleClose}
        footer={null}
      >
        <Form
          form={form}
          name={action.toLowerCase()}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: false }}
          onFinish={action === "Login" ? handleLoginSubmit : handleSignupSubmit}
        >
          {action === "Signup" && (
            <Form.Item
              label="Username"
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input />
            </Form.Item>
          )}
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
          {action === "Signup" && (
            <Form.Item
              label="Confirm Password"
              name="confirmpassword"
              rules={[
                { required: true, message: "Please confirm your password!" },
              ]}
            >
              <Input.Password />
            </Form.Item>
          )}

          <Form.Item
            label="role"
            name="role"
            rules={[{ required: true, message: "please select correct role" }]}
          >
            <Select placeholder="choose user type">
              <Select.Option value="admin">Admin</Select.Option>
              <Select.Option value="user">User</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 12, span: 16 }}>
            <Button
              type="primary"
              htmlType="submit"
              loading={
                action === "Login" ? LoginApi.isPending : SignupApi.isPending
              }
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
        <Typography.Link
          italic
          strong
          onClick={() => setAction(action === "Login" ? "Signup" : "Login")}
        >
          <Typography.Text type="secondary">
            {/* change the text title text link of login and signup based on onClick*/}
            {action === "Login"
              ? "Don't have an account? Sign up here: "
              : "Already have an account? Login here: "}
          </Typography.Text>
          {action === "Login" ? "Signup" : "Login"}
        </Typography.Link>
      </Modal>
    </div>
  );
};

export default LoginSignup;
