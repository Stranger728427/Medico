import { configureStore } from "@reduxjs/toolkit";
import LoginSignupPopupSlice from "../slice/LoginSignupPopupSlice";

const store = configureStore({
  reducer: {
    auth: LoginSignupPopupSlice,
  },
});

export default store;
