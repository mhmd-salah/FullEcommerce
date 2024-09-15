import { addItemToShoppingCart } from "@/utilts/utilts";
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
      state.cartProducts = addItemToShoppingCart( action.payload,(state.cartProducts as any))
    }
  }
}) 
export const {addToCart} = cartSlice.actions
export default cartSlice.reducer
export const selectCartProduct = ({cart}:any  )=>cart;