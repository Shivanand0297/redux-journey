import { faker } from "@faker-js/faker";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// this createApi method will create a lot of reducers, slices, thunks behind the scene to store the data related to the request
export const albumsApi = createApi({
  reducerPath: "albums", //path to where to store this state inside the redux store
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3005",
  }),
  endpoints(builder) {  // always give endpoints
    return {
      fetchAlbums: builder.query({
        query: (user) => {
          // goal of the query object it to tell how to make the request
          return {
            url: "/albums",
            params: {
              userId: user.id,
            },
            method: "GET",
          };
        },
      }),
      
    };
  },
});

export const { useFetchAlbumsQuery } = albumsApi; // next we need to connect our store with the automatically reacted reducer
// to use this api we use albumsApi.useFetchAlbumsQuery()

/***********************************************************************************************************
 * @Steps
 * 1. Identify the group of related requests that your app needs to make
 * 2. Make a new file that will create the api.
 * 3. The API needs to store a ton of state related to data, request, status, error And a "reducerPath".
 * 4. The API needs to know where and how to make the request. Add a baseQuery.
 * 5. Add "endpoints" for each kind of requests you want to make. Request that reads data are "query" and that write data are "mutations".
 * 6. Export all the automatically generated hooks.
 * 7. Connect the API to store. Reducer, middlewares, Listners.
 * 8. Export the hooks from store/index.js file
 * 9. Use the generated hooks in a components.
 ***********************************************************************************************************/