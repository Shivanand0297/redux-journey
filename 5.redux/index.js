// Redux actions
const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCK = "CAKE_RESTOCK";

const ICE_CREAM_ORDERED = "ICE_CREAM_ORDERED";
const ICE_CREAM_RESTOCK = "ICE_CREAM_RESTOCK";

// creating store
import {legacy_createStore as createStore, bindActionCreators, combineReducers, applyMiddleware} from "redux";

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

const iceCreamOrder = () =>{

  return {  //Note: action object must have type property.
    type: ICE_CREAM_ORDERED,
    payload: 1
  }

}

// action creator to restock the cake
const iceCreamRestock = (qty = 1) =>{
  return {
    type: ICE_CREAM_RESTOCK,
    payload: qty
  }
}

const cakeinitialState = {
  noOfCakes: 10
}

const iceCreaminitialState = {
  noOficeCream: 10
}

// cake reducer
const cakeReducer = (state = cakeinitialState, action) =>{
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

const iceCreamReducer = (state = iceCreaminitialState, action) =>{
  switch (action.type) {
    case ICE_CREAM_ORDERED:
      return {
        ...state, 
        noOficeCream: state.noOficeCream - 1
      }
    case ICE_CREAM_RESTOCK:
      return {
        ...state, 
        noOficeCream: state.noOficeCream + action.payload
      }        
    default:
      return state
  }
}

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer
})


// store
const store = createStore(rootReducer, applyMiddleware())

// initialState
console.log("initialState", store.getState()) 

// listner, anytime the state updates we log the state to console
const unsubscribe = store.subscribe(()=> console.log("Updatate state", store.getState()))

// to change the store state
// store.dispatch(cakeOrder())
// store.dispatch(cakeOrder())
// store.dispatch(cakeOrder())

// store.dispatch(cakeRestock(3))

const actions = bindActionCreators({cakeOrder, cakeRestock, iceCreamOrder, iceCreamRestock}, store.dispatch)
actions.cakeOrder()
actions.cakeOrder()
actions.cakeOrder()
actions.cakeRestock(3)

actions.iceCreamOrder()
actions.iceCreamOrder()
actions.iceCreamRestock(2)

unsubscribe();

// will not listen for the store changes below unsubscribe()
store.dispatch(cakeOrder())