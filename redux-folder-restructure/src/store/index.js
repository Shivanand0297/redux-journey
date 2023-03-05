// creating store
import { configureStore } from "@reduxjs/toolkit";
// importing all slices and actions
import { songsReducer, addSong, removeSongs } from "./slices/songSlice";
import { moviesReducer, addMovie, removeMovie } from "./slices/movieSlice";
import { reset } from "./actions/actions";

export const store = configureStore({
  reducer: {
    songs: songsReducer, 
    movies: moviesReducer
  },
});

// exporting all the actions, to be available to all the components
export { addSong, removeSongs, addMovie, removeMovie, reset }  
