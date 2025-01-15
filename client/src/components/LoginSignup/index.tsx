import { useDispatch, useSelector } from "react-redux";
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
import { Avatar, Button, Form, Input, message, Modal, Typography } from "antd";
import Profile from "../Profile";
import { UserOutlined } from "@ant-design/icons";

const LoginSignup = () => {
  const dispatch = useDispatch();
  const { visible, loading, goSignup, login, isProfilePopupViewed, user } =
    useSelector((state: any) => state.auth);

  const [form] = Form.useForm();
  const FormValues = Form.useWatch([], { form: form });

  const handleSubmit = () => {
    dispatch(startLoading());

    console.log("Received values:", FormValues.username);

    setTimeout(() => {
      dispatch(stopLoading());
      dispatch(closeModal());
      dispatch(
        loginSuccess({ username: FormValues.username, email: FormValues.email })
      );
      form.resetFields();
      message.success(
        `${
          goSignup
            ? `${FormValues.username} Signup`
            : `${FormValues.email} Login`
        } successful`
      );
    }, 2000);
  };

  return (
    <div>
      {login ? (
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
        title="Login/Signup"
        open={visible}
        onCancel={() => dispatch(closeModal())}
        footer={null}
      >
        <Form
          form={form}
          name={goSignup ? "Signup" : "Login"}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: false }}
          onFinish={handleSubmit}
        >
          {goSignup && (
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
          {goSignup && (
            <Form.Item
              label="Confirm Password"
              name="confirmPassword"
              rules={[
                { required: true, message: "Please confirm your password!" },
              ]}
            >
              <Input.Password />
            </Form.Item>
          )}
          <Form.Item wrapperCol={{ offset: 12, span: 16 }}>
            <Button type="primary" htmlType="submit" loading={loading}>
              Submit
            </Button>
          </Form.Item>
        </Form>
        <Typography.Link italic strong onClick={() => dispatch(toggleSignup())}>
          <Typography.Text type="secondary">
            You Don't Have Account Then Go To:{" "}
          </Typography.Text>
          {goSignup ? "Signup" : "Login"}
        </Typography.Link>
      </Modal>
    </div>
  );
};

export default LoginSignup;
