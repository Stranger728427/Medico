import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum Role {
  ADMIN = "admin",
  User = "user",
}

export interface UserAuth {
  userId: string;
  name?: string;
  username: string;
  email: string;
  roles: Role[];
}

const initialState: UserAuth = {
  name: "",
  email: "",
  roles: [],
  userId: "",
  username: "",
};

export const userSlice = createSlice({
  name: "UserAuth",
  initialState: {
    value: initialState,
  },
  reducers: {
    updateUserAuth: (state: any, action: PayloadAction<Partial<UserAuth>>) => {
      state.value = { ...state.value, ...action.payload };
    },
    login: (state: any, action: PayloadAction<UserAuth>) => {
      state.value = {
        ...action.payload,
      };
    },
    logout: (state: any) => {
      state.value = initialState;
    },
  },
});

export const { updateUserAuth, login, logout } = userSlice.actions;
export const UserAuthSelector = (state: any): UserAuth => state.UserAuth?.value;
