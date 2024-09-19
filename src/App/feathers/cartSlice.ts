import { addItemToShoppingCart } from "@/utilts/utilts";
import { createSlice } from "@reduxjs/toolkit";

interface IState{
  cartProducts:any[]
}

const initialState:IState = {
  cartProducts:[]
}

const cartSlice = createSlice({
  name:"cart",
  initialState,
  reducers:{
    addToCart:(state, action)=>{
      state.cartProducts = addItemToShoppingCart( action.payload,(state.cartProducts as any))
    },
    removeFromCart:(state, action)=>{
      state.cartProducts = state.cartProducts.filter(item=>item.id !== action.payload)
    },
    clearAll:(state)=>{
      state.cartProducts = state.cartProducts = []
    }

  }
}) 
export const {addToCart,removeFromCart,clearAll} = cartSlice.actions
export default cartSlice.reducer
export const selectCartProduct = ({cart}:any  )=>cart;