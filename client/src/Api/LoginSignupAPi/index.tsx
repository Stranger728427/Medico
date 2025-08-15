import { useMutation } from "@tanstack/react-query";
import { message } from "antd";
import axios, { AxiosError } from "axios";

type LoginSignupApiProps = {
  username?: string;
  email: string;
  password: string;
  confirmpassword?: string;
  role: string;
};

export const userAuth = () => {
  const BASE_URL = "http://localhost:3000/api/auth";

  const SignupApi = useMutation({
    mutationFn: async (payload: LoginSignupApiProps) => {
      const response = await axios.post(`${BASE_URL}/signup`, payload);
      console.log(response.data);
      return response.data;
    },
    onSuccess: (response) => {
      // console.log(response.data);
      message.success(response.message);
    },
    onError: (response) => {
      message.error(response?.message);
    },
  });

  const LoginApi = useMutation({
    mutationFn: async (payload: LoginSignupApiProps) => {
      const response = await axios.post(`${BASE_URL}/login`, payload);
      return response.data;
    },
    onSuccess: () => {
      // console.log("Login Success");
      message.success("Login Success");
    },
    onError: (response) => {
      message.error(response?.message);
    },
  });

  const userLogout = useMutation({
    mutationFn: async () => {
      const response = await axios.post(`${BASE_URL}/logout`);
      return response.data;
    },
    onSuccess: () => {
      message.success("Logout Success");
    },
    onError: (error: AxiosError<any>) => {
      const errMsg = error.response?.data?.error || "Logout failed";
      message.error(errMsg);
    },
  });

  return {
    SignupApi,
    LoginApi,
    userLogout,
  };
};
