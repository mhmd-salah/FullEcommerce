import { createSlice } from "@reduxjs/toolkit";

interface IinitialState {
  isOpenCartDrawer: boolean;
  OnOpenCartDrawer: boolean;
  OnCloseCartDrawer: boolean;
}

const initialState:IinitialState = {
  isOpenCartDrawer: false,
  OnOpenCartDrawer: false,
  OnCloseCartDrawer: false,
}

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    onOpenCartDrawer: (state) => {
      state.OnOpenCartDrawer = true;
      state.isOpenCartDrawer= true;
      
    },
    onCloseCartDrawer: (state) => {
      state.isOpenCartDrawer = false;
      state.OnOpenCartDrawer = false;
      state.OnCloseCartDrawer = true;
    },
  },
});

export const {  onOpenCartDrawer, onCloseCartDrawer } =
  globalSlice.actions;
export default globalSlice.reducer;
export const selectGlobal = (state: any) => state.global;