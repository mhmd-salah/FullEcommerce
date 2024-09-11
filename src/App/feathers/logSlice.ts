import { api } from "@/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const userLog = createAsyncThunk(
  "login/userLogin",
  async (_, thunkAPi) => {
    const {rejectWithValue} = thunkAPi;
    try{
      const {data} = await api.post("/auth/local")
      return data;
    }catch(error){
      rejectWithValue(error)
    }
  }
);

const logSlice = createSlice({
  name: "login",
  initialState: {
    loading: false,
    data: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(userLog.pending, (state,action)=>{
      state.loading=false; 
    })
  },
  
});
