import { api } from "@/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const userLogThunk = createAsyncThunk(
  "log/userLogThunk",
  async (user, ThunkApi) => {
    const { rejectWithValue } = ThunkApi;
    try {
      const { data } = await api.post("/aut/local", user);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const initialState = {
  loading: false,
  data: null,
  error: null,
};

const userLog = createSlice({
  name: "log",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(userLogThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(userLogThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(userLogThunk.rejected, (state, action) => {
        const payload = action.payload as any;
        state.error = payload;
        state.loading = false;
      });
  },
});

export default userLog.reducer;

export const selectLog = (state:RootState)=>state.login