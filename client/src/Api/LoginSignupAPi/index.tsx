import { useMutation } from "@tanstack/react-query";
import { message } from "antd";
import axios from "axios";

type LoginSignupApiProps = {
  username?: string;
  email: string;
  password: string;
  confirmpassword?: string;
  role: string;
};

export const useAuth = () => {
  const BASE_URL = "http://localhost:3000/api/auth";

  const SignupApi = useMutation({
    mutationFn: async (data: LoginSignupApiProps) => {
      const response = await axios.post(`${BASE_URL}/signup`, data);
      console.log(response.data);
      return response.data;
    },
    onSuccess: (response) => {
      // console.log(response.data);
      message.success(response.message);
    },
  });

  const LoginApi = useMutation({
    mutationFn: async (data: LoginSignupApiProps) => {
      const response = await axios.post(`${BASE_URL}/login`, data);
      return response.data;
    },
    onSuccess: () => {
      // console.log("Login Success");
      message.success("Login Success");
    },
  });

  return {
    SignupApi,
    LoginApi,
  };
};
