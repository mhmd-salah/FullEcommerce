import { configureStore } from "@reduxjs/toolkit";
import LoginSlice from "./feathers/loginSlice";
import cartSlice from "./feathers/cartSlice";
import globalSlice from "./feathers/globalSlice";

export const store = configureStore({
  reducer: {
    global:globalSlice,
    login: LoginSlice,
    cart: cartSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type useAppDispatch = typeof store.dispatch;
