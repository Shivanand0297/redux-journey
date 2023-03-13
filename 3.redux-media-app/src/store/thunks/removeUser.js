import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const removeUser = createAsyncThunk("user/remove", async (user)=>{
  const { data } = await axios.delete(`http://localhost:3005/users/${user.id}`);

  // FIXME:
  // return data;  //json server will return a empty object in response to the successfull request 
  // we need to return a value that we can use in userSlice to update the data[] property

  return user;
})