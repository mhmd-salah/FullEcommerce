import { api } from "@/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

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
  async (_, thunkAPi) => {
    const { rejectWithValue } = thunkAPi;
    try {
      const { data } = await api.get("/auth/local");
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
    }),
    builder.addCase(userLogin.fulfilled, (state,{payload})=>{
      state.loading = false;
      state.data = payload;
      state.error = null
    }),
    builder.addCase(userLogin.rejected, (state,{payload})=>{
      state.loading = false;
      state.data = [];
      state.error = payload;
    })
  }
})
export const loginReducer = loginSlice.reducer

