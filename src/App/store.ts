import { configureStore } from "@reduxjs/toolkit";
import LoginSlice from "./feathers/loginSlice";
import cartSlice from "./feathers/cartSlice";
import globalSlice from "./feathers/globalSlice";
import { persistStore, persistReducer } from "redux-persist";
import localStorage from "redux-persist/es/storage";
import { apiSlice } from "./services/apiSlice";

const persistcartConfig = {
  key: "cart",
  storage: localStorage,
};

const persistCart = persistReducer(persistcartConfig, cartSlice);

export const store = configureStore({
  reducer: {
    global: globalSlice,
    login: LoginSlice,
    cart: persistCart,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat([apiSlice.middleware]),
});

export const persister = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type useAppDispatch = typeof store.dispatch;
