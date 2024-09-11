import { configureStore } from "@reduxjs/toolkit";
import LoginSlice from "./feathers/loginSlice";
import cartSlice from "./feathers/cartSlice";

export const store = configureStore({
  reducer: {
    login: LoginSlice,
    cart: cartSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
