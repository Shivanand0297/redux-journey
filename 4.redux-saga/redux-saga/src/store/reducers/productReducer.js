import { SET_PRODUCTS } from "../actions/action.types";

export const productReducer = (state = [], action) => {
  console.log("productReducer called",action)
  switch (action.type) {
    case SET_PRODUCTS:
      return [...state, ...action.payload]  
    default:
      return state
  }
}