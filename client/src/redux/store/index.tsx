import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage/session";
import { reducers } from "../reducers";
import { persistStore } from "redux-persist";
import { useDispatch, useSelector } from "react-redux";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["UserAuth"],
};

const reducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer,
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppStore = typeof store;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector = useSelector.withTypes<RootState>();
