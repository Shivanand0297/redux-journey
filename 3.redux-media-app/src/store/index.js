// to make a big store object
import { configureStore } from "@reduxjs/toolkit";

// user combined reducer
import { userReducer } from "./slices/UserSlice";

// to watch for the api request, this is only one time setup
import { setupListeners } from "@reduxjs/toolkit/query/react"

// rtq api function
import { albumsApi } from "./apis/albumApis";

// photosApi
import { photosApi } from "./apis/photosApi";

export const store = configureStore({
  reducer: {
    user: userReducer,
    // albums: albumsApi.reducer, // also work but there is a chance of typo in album key
    [albumsApi.reducerPath]: albumsApi.reducer, // right way
    [photosApi.reducerPath]: photosApi.reducer,
  },
  middleware: (getDefaultMiddleware)=>{
    return getDefaultMiddleware()
      .concat(albumsApi.middleware)
      .concat(photosApi.middleware)
  }
});

// this is only one time setup
setupListeners(store.dispatch)

// find everything that gets exported from thunks/fetchUser and export it from index.js as well
export * from "./thunks/fetchUsers";
export * from "./thunks/addUser";
export * from "./thunks/removeUser";

// exporting all the custom hooks
export { useFetchAlbumsQuery, useAddAlbumMutation, useRemoveAlbumMutation } from "./apis/albumApis";
export { useFetchPhotosQuery, useAddPhotoMutation, useRemovePhotoMutation } from "./apis/photosApi";
