import { createSlice } from "@reduxjs/toolkit";

interface IState{
  cartProducts:any[]
}

const initialState:IState = {
  cartProducts:[]
}

const cartSlice = createSlice({
  name:"carts",
  initialState,
  reducers:{
    addToCart:(state, action)=>{
      state.cartProducts = [...state.cartProducts, action.payload]
    }
  }
}) 
export const {addToCart} = cartSlice.actions
export default cartSlice.reducer
export const selectCartProduct = ({cart}:any  )=>cart;