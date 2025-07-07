import { useDispatch, useSelector } from "react-redux";
import { useAuth } from "../../Api/LoginSignupAPi";
import {
  showModal,
  closeModal,
  startLoading,
  stopLoading,
  toggleSignup,
  loginSuccess,
  logout,
  toggleProfilePopup,
} from "../../redux/slice/LoginSignupPopupSlice";

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

const LoginSignup = () => {
  const dispatch = useDispatch();

  const { visible, loading, goSignup, login, isProfilePopupViewed, user } =
    useSelector((state: any) => state.auth);

  const [action, setAction] = useState("Login");

  const [form] = Form.useForm();
  const FormValues = Form.useWatch([], { form: form });
  //console.log(FormValues);

  const { SignupApi, LoginApi } = useAuth();

  const handleSignupSubmit = async () => {
    try {
      const response = await SignupApi.mutateAsync(FormValues);
      //console.log(response);
      dispatch(stopLoading());
      dispatch(loginSuccess(response));
      dispatch(toggleProfilePopup());
      dispatch(toggleSignup());
      dispatch(closeModal());
    } catch (error: any) {
      dispatch(stopLoading());
      message.error(error.message) || "error while signup";
    }
  };

  const handleLoginSubmit = async () => {
    dispatch(startLoading());
    try {
      const response = await LoginApi.mutateAsync(FormValues);

      dispatch(stopLoading());
      // dispatch(loginSuccess(response));
      if (response.status === "200") {
        message.success(`${response.message}`);
      }
      dispatch(toggleProfilePopup());
      dispatch(toggleSignup());
      dispatch(closeModal());
    } catch (error) {
      dispatch(stopLoading());
      message.error(error.message) || "error while login";
    }
  };

  return (
    <div>
      {LoginApi.isSuccess ? (
        <>
          <Avatar
            size="large"
            icon={<UserOutlined />}
            style={{
              marginRight: "10px",
              cursor: "pointer",
              backgroundColor: "#f56a00",
            }}
            onClick={() => dispatch(toggleProfilePopup())}
          />
          {isProfilePopupViewed && (
            <Profile
              isModalVisible={isProfilePopupViewed}
              closeModal={() => dispatch(toggleProfilePopup())}
              handleLogout={() => dispatch(logout())}
            />
          )}
        </>
      ) : (
        <Button type="primary" onClick={() => dispatch(showModal())}>
          Login
        </Button>
      )}

      <Modal
        title={action}
        open={visible}
        onCancel={() => dispatch(closeModal())}
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
            <Button type="primary" htmlType="submit" loading={loading}>
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
