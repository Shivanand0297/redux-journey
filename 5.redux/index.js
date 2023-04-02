// Redux actions
const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCK = "CAKE_RESTOCK";

// creating store
import {legacy_createStore as createStore, bindActionCreators} from "redux";

// action creator
const cakeOrder = () =>{

  return {  //Note: action object must have type property.
    type: CAKE_ORDERED,
    payload: 1
  }

}

// action creator to restock the cake
const cakeRestock = (qty = 1) =>{
  return {
    type: CAKE_RESTOCK,
    payload: qty
  }
}

const initialState = {
  noOfCakes: 10
}

// cake reducer
const cakeReducer = (state = initialState, action) =>{
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state, 
        noOfCakes: state.noOfCakes - 1
      }
    case CAKE_RESTOCK:
      return {
        ...state, 
        noOfCakes: state.noOfCakes + action.payload
      }        
    default:
      return state
  }
}

// store
const store = createStore(cakeReducer)

// initialState
console.log("initialState", store.getState()) 

// listner, anytime the state updates we log the state to console
const unsubscribe = store.subscribe(()=> console.log("Updatate state", store.getState()))

// to change the store state
// store.dispatch(cakeOrder())
// store.dispatch(cakeOrder())
// store.dispatch(cakeOrder())

// store.dispatch(cakeRestock(3))

const actions = bindActionCreators({cakeOrder, cakeRestock}, store.dispatch)
actions.cakeOrder()
actions.cakeOrder()
actions.cakeOrder()
actions.cakeRestock(3)

unsubscribe();

// will not listen for the store changes below unsubscribe()
store.dispatch(cakeOrder())