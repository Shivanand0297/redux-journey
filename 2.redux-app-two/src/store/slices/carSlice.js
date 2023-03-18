import { createSlice, nanoid } from "@reduxjs/toolkit"

const carSlice = createSlice({
  name: "cars",
  initialState: {
    searchTerm: "",
    carList: [],
  },
  reducers: {
    changeSearchTerm(state, action){
      // assuming the search term is coming from payload
      state.searchTerm = action.payload;
    },
    addCar(state, action){
      state.carList.push({
        id: nanoid(),
        name: action.payload.name,
        cost: action.payload.cost
      })
    },
    removeCar(state, action){
      // filter the carList array
      const filterCars = state.carList.filter(car=>(car.id !== action.payload));
      state.carList = filterCars;
    }
  }
})


export const { changeSearchTerm, addCar, removeCar } = carSlice.actions;
export const carReducer = carSlice.reducer;