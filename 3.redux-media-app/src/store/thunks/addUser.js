import { faker } from "@faker-js/faker";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addUser = createAsyncThunk("user/add", async ()=>{
  const {data} = await axios.post("http://localhost:3005/users", {
    name: faker.name.firstName()
  })
  return data;
})