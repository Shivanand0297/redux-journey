import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./slices/UserSlice";

export const store = configureStore({
  user: userReducer
})

