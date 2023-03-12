// importing async thunk to make a network request
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk("user/fetch", async ()=>{
  const {data} = await axios.get("http://localhost:3005/users");
  // DEV ONLY
  await pause(1000) // PAUSING FOR 3000 MILISECONDS
  return data;
})

// Note: DEV ONLY

const pause = (duration) =>{
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve("resolve")
    }, duration)

  })
}

// redux will automatically assing 3 properties to the fetchuser
// fetchUser.pending === "user/fetch/pending"
// fetchUser.fulfilled === "user/fetch/fulfilled"
// fetchUser.rejected === "user/fetch/rejected"

/**@Steps for using async thunk */
// 1️⃣. Name the thunk file with the purpose of the request.
// 2️⃣. Create a thunk and give it a "base type" with the purpose of the request like "user/fetch".
// 3️⃣. In the thunk make the request and return the data that you want to use in the reducer.
// 4️⃣. In the slice make extraReducers watching for action types made by the thunk.
// 5️⃣. Export the thunk from the index.js file in the store.
// 6️⃣. When user does something, dispatch the thunk function to run it.
