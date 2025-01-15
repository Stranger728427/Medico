import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  visible: false,
  loading: false,
  goSignup: false,
  login: false,
  isProfilePopupViewed: false,
  user: null,
};

const LoginSignupPopupSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    showModal: (state) => {
      state.visible = true;
    },
    closeModal: (state) => {
      state.visible = false;
    },
    startLoading: (state) => {
      state.loading = true;
    },
    stopLoading: (state) => {
      state.loading = false;
    },
    toggleSignup: (state) => {
      state.goSignup = !state.goSignup;
    },
    loginSuccess: (state, action) => {
      state.login = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.login = false;
      state.user = null;
    },
    toggleProfilePopup: (state) => {
      state.isProfilePopupViewed = !state.isProfilePopupViewed;
    },
  },
});

export const {
  showModal,
  closeModal,
  startLoading,
  stopLoading,
  toggleSignup,
  loginSuccess,
  logout,
  toggleProfilePopup,
} = LoginSignupPopupSlice.actions;

export default LoginSignupPopupSlice.reducer;
