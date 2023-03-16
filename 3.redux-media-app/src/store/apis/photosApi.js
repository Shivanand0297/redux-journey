import { faker } from "@faker-js/faker"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"  //Note: "react" at the end is important to get the custom automatically generated hooks


export const photosApi = createApi({
  reducerPath: "photos",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3005",
  }),
  endpoints: (builder)=>{
    return {
      fetchPhotos: builder.query({
        query: (album)=>{
          return {
            url: "/photos",
            params: {
              albumId: album.id,
            },
            method: "GET",
          }
        },
        providesTags: (result, _error, album)=>{
          const tags = result.map((photo)=>{
            return { type: "Photo", id: photo.id}
          })
          tags.push({ type: "AlbumPhoto", id: album.id })
          return tags;
        }
      }),

      addPhoto: builder.mutation({
        query: (album)=>{
          return {
            url: "/photos",
            method: "POST",
            body: {
              albumId: album.id,
              url: faker.image.abstract(200, 200, true)
            }
          }
        },
        invalidatesTags: (_result, _error, album)=>{
          return [ {type: "AlbumPhoto", id: album.id} ]
        }
      }),

      removePhoto: builder.mutation({
        query: (photo)=>{
          return {
            url: `/photos/${photo.id}`,
            method: "DELETE"
          }
        },
        invalidatesTags: (_result, _error, photo)=>{
          return [ { type: "Photo", id: photo.id } ]
        }
      })
      
      
    }
  } 
  
})

export const { useFetchPhotosQuery, useAddPhotoMutation, useRemovePhotoMutation } = photosApi;