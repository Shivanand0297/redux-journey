import { configureStore } from "@reduxjs/toolkit"
// importing all the combined reducers and action creators
import { addCar, removeCar, changeSearchTerm, carReducer } from "./slices/carSlice"
import { changeCost, changeName, formReducer } from "./slices/formSlice"

// creating store 
export const store = configureStore({
  reducer: {
    cars: carReducer,
    form: formReducer,
  }
})

export {addCar, removeCar, changeSearchTerm, changeCost, changeName}
