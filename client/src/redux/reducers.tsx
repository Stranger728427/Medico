import { combineReducers } from "redux";
import { userSlice } from "./slice/UserSlice";

export const reducers = combineReducers({
  UserAuth: userSlice.reducer,
});
