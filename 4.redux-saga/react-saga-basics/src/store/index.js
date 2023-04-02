// configuring the store
import { configureStore } from "@reduxjs/toolkit";

// importing all the actions
import { addToCart, fetchProducts, cartReducer } from "./slices/cartSlice";

// importing productSaga 
import productSaga from "./saga/productSaga";

// creating sagaMiddleWare
import createSagaMiddleWare from "redux-saga"

const sagaMiddleWare = createSagaMiddleWare()

export const store = configureStore({
  reducer: {
    cart: cartReducer
  },
  middleware: (getDefaultMiddleware)=>{
   return getDefaultMiddleware().concat(sagaMiddleWare)
  }
})

// run this productSaga generator function
sagaMiddleWare.run(productSaga)

// exporting all the actions
export {addToCart, fetchProducts}