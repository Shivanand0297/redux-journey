import { configureStore, createSlice, createAction } from "@reduxjs/toolkit";

// 1️⃣ slice will automatically going to create some of the reduceres and also the action types
// defines some initialState
// it combine the mini-reducers into a big reducer
// creates a set of actions-creator functions
// rtk is helping us to not writing all the time switch statements and dispatch action objects

export const reset = createAction("app/reset");

const songsSlice = createSlice({
  name: "song",
  initialState: [], // can be anything
  reducers: {
    // mini reducer to run this reducer action type will be - "name/reducername" -> "song/addSong"
    addSong(state, action) {
      //Note: state is not the big store object here, it is the piece of state managed by this reducer - (initialState)
      state.push(action.payload);
    },
    //mini reducer to run this reducer action type will be - "name/reducername" -> "song/removeSongs"
    removeSongs(state, action) {
      let songToRemoveIndex = state.indexOf(action.payload)
      state.splice(songToRemoveIndex, 1)
    },
    // resetSongs(){
    //   return [];
    // }
  },
  // whenever we dispatch some action that will be checked by Note: all the combined reducers and if that type is what they
  // want then they will run the corrosponding reducer 
  extraReducers(builder){
    // we want to watch out for the action type of "movie/reset" and do somthing based on that
    builder.addCase(reset, (state, action)=>{ // we should avoid writing action types "movie/reset" because there is a chance of type
      // this call back is same as above slice reducers
      return [];

      // will also run in this case
      // moviesSlice.actions.reset
      // moviesSlice.actions.reset.toString()
    })
  }
});


const moviesSlice = createSlice({
  name: "movie",
  initialState: [],
  reducers: {
    addMovie(state, action){
      state.push(action.payload)
    },
    removeMovie(state, action){
      let movieToRemove = state.indexOf(action.payload)
      state.splice(movieToRemove, 1)
    },
    // reset(){
    //   // we have to mutate state here because immer will only detact the state change
    //   // state = [] here we are not mutating the state, we are only reassigning the state to a []
    //   // state.list = [] this is mutating the state and is right
    //   return [];
    // }
  }, 
  extraReducers(builder){
    builder.addCase(reset, (state, action)=>{
      return [];
    })
  }

})

/* 
2️⃣ the store is an object which stores all the states.
we will not usually interact with the store directly, to do it we have react-redux library.
For debuging purpose we will need to access the store manualy by -
  store.dispatch({ type: "songs/addSong"}) 
and
  store.getState() - to get all the states
 */

/** @creating_store */
/* 
3️⃣ The key "songs" is defined when the store is created and the value is coming from the individual reducers
 "songsSlice.reducer" (song reducer) from here
*/

export const store = configureStore({
  reducer: {
    songs: songsSlice.reducer, // songs value in coming from the songsSlice reducer, here reducer is function having all the mini reducers wraped in the big object
    movies: moviesSlice.reducer
  },
});

// exporting action creator function payload will be its only parameter
export const { addSong, removeSongs } = songsSlice.actions;  // songSclice will automatically creates the addSong action creator
export const { addMovie, removeMovie } = moviesSlice.actions

// console.log(moviesSlice.actions.reset.type)
// console.log(moviesSlice.actions.reset.toString())

//Note: steps to connect react to redux
// 1️⃣ export the store from the file it is created in
// 2️⃣ import the store into the root index.js file
// 3️⃣ import the Provider from react-redux
// 4️⃣ wrap the App component with Provider and pass the store in the store prop

// const startingState = store.getState()
// console.log(JSON.stringify(startingState))

// {"songs":[]}

// manualy creating action object
/* 
store.dispatch({
  type: "song/addSong",
  payload: "New Song!!"
})
 */

// slice will automatically creates the action creators with there types
// when called they return an action that we can dispatch
// saves us from manually write the action creators

// store.dispatch(songsSlice.actions.addSong("Some New Song!!"))

// const finalState = store.getState()
// console.log(JSON.stringify(finalState))

// {"songs":["New Song!!"]}
