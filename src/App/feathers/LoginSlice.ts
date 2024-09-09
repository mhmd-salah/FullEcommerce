import { api } from "@/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

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
      const { data } = await api.post("/auth/local",user);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const loginSlice = createSlice({
  name:"login",
  initialState,
  reducers:{},
  extraReducers:(builder) => {
    builder.addCase(userLogin.pending, (state) => {
      state.loading = true;
    })
    .addCase(userLogin.fulfilled, (state,{payload})=>{
      state.loading = false;
      state.data = payload;
      state.error = null
    })
    .addCase(userLogin.rejected, (state,{payload})=>{
      state.loading = false;
      state.data = [];
      state.error = payload;
    })
  }
})

export default loginSlice.reducer;
export const selectLogin = (state:RootState)=>state.login;