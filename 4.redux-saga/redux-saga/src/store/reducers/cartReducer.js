import { ADD_TO_CART, EMPTY_CART } from "../actions/action.types"

const initialState = []

export const cartReducer = (state = initialState, action) =>{
  console.log("cartReducer called",action)
  switch(action.type){
    case ADD_TO_CART: 
    return [...state , action.payload]
    case EMPTY_CART: 
    return []
  default: 
    return state
  }
}