import { ADD_TO_CART, EMPTY_CART } from "./action.types"

export const addToCart = (data) => {
  console.log("action called", data)
  return {
    type: ADD_TO_CART,
    payload: data
  }
}

export const emptyCart = () => {
  return {
    type: EMPTY_CART,
  }
}