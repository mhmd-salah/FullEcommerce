import { api } from "@/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { createStandaloneToast } from "@chakra-ui/react";
import CookieService from "@/services/cookieService";

const { toast } = createStandaloneToast();

interface IinitialState {
  loading: boolean;
  data: unknown;
  error: unknown | null;
}

const initialState: IinitialState = {
  loading: false,
  data: null,
  error: null,
};

export const userLogin = createAsyncThunk(
  "login/userLogin",
  async (user, thunkAPi) => {
    const { rejectWithValue } = thunkAPi;
    try {
      const { data } = await api.post("/auth/local", user);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state) => {
        state.loading = true;
      })
      .addCase(userLogin.fulfilled, (state, { payload }) => {
        const date = new Date();
        const IN_DAYS = 3;
        const ExpiresAp = IN_DAYS * 24 * 60 * 60 * 1000;
        date.setTime(date.getTime() + ExpiresAp);

        const option = { path: "/", expires: date };
        CookieService.set("jwt", payload.jwt, option);
        state.loading = false;
        state.data = payload;
        state.error = null;
        toast({
          title: "user login fulfilled",
          description: "login done",
          status: "success",
          duration: 900,
          isClosable: true,
        });
        setTimeout(() => {
          window.location.assign("/")
        }, 1000);
      })
      .addCase(userLogin.rejected, (state, action) => {
        const payload = action.payload as any;
        state.loading = false;
        state.data = [];
        state.error = payload;
        toast({
          title: "user login rejected",
          description: `${payload.response.data.error.message}`,
          status: "error",
          duration: 1000,
          isClosable: true,
        });
      });
  },
});

export default loginSlice.reducer;
export const selectLogin = (state: RootState) => state.login;
