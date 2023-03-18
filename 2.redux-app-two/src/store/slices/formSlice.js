import { createSlice } from "@reduxjs/toolkit";
import { addCar } from "./carSlice";

const formSlice = createSlice({
  name: "form",
  initialState: {
    name: "",
    cost: "",
  },
  reducers: {
    changeName(state, action) {
      state.name = action.payload;
    },
    changeCost(state, action) {
      state.cost = action.payload;
    },
  },
  extraReducers(builder){
    builder.addCase(addCar, (state, action)=>{
      state.name = "";
      state.cost = "";
    })
  }
});

export const { changeCost, changeName } = formSlice.actions;
export const formReducer = formSlice.reducer;
