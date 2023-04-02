import { createSlice } from "@reduxjs/toolkit";
// import { productList } from "../actions/productList";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItem: [],
    products: []
  },
  reducers: {
    addToCart: (state, action)=>{
      state.cartItem = [...state.cartItem, action.payload]
    }, 
    fetchProducts: (state, action)=>{
      state.products = [...state.products, action.payload]
    }
  },
  // extraReducers: (builder)=>{
  //   builder.addCase(productList.type, (state, action)=>{
  //     state.products = [...state.products, action.payload]
  //   })
  
})

export const { addToCart, fetchProducts } = cartSlice.actions; // actions

export const cartReducer = cartSlice.reducer; // combined reducer