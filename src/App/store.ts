import { configureStore } from "@reduxjs/toolkit";
import LoginSlice from "./feathers/loginSlice";

export const store = configureStore({
  reducer: {
    login: LoginSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
