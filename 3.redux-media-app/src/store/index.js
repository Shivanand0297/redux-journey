import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./slices/UserSlice";

export const store = configureStore({
  reducer: {
    user: userReducer
  }
})

// find everything that gets exported from thunks/fetchUser and export it from index.js as well
export * from "./thunks/fetchUsers"
