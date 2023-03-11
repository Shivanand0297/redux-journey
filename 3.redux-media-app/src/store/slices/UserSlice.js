import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../thunks/fetchUsers";

const userSlice = createSlice({
  name: "users",
  initialState: {
    data: [],
    isLoading: false,
    error: null
  },
  extraReducers(builder) {
    // changing data at the time of making request
    builder.addCase(fetchUsers.pending,(state, action)=>{
      state.isLoading = true;
    })

    // changing the state when the request is fulfilled
    builder.addCase(fetchUsers.fulfilled,(state, action)=>{
      state.isLoading = false;
      state.data = action.payload;  //this payload is coming from the return of the fetchuser thunk
    })

    // changing the state when the request is rejected
    builder.addCase(fetchUsers.rejected,(state, action)=>{
      state.isLoading = false;
      state.error = action.error;
    })
  }
});

export const userReducer = userSlice.reducer;
