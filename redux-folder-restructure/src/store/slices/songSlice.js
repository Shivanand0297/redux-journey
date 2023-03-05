import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../actions/actions";

const songsSlice = createSlice({
  name: "song",
  initialState: [],
  reducers: {
    addSong(state, action) {
      state.push(action.payload);
    },
    removeSongs(state, action) {
      let songToRemoveIndex = state.indexOf(action.payload);
      state.splice(songToRemoveIndex, 1);
    },
  },
  extraReducers(builder) {
    builder.addCase(reset, (state, action) => {
      return [];
    });
  },
});

export const { addSong, removeSongs } = songsSlice.actions;
export const songsReducer = songsSlice.reducer;
