import { createRandomSong } from "../data";
import { useDispatch, useSelector } from "react-redux";
import { addSong, removeSongs } from "../store";

function SongPlaylist() {
  // Get list of songs by using useSelector hook
  const songPlaylist = useSelector((state) => state.songs); // we only want the songs array from the whole store
  const dispatch = useDispatch();

  const handleSongAdd = (song) => {
    // Add song to list of songs
    // const action = addSong(song)
    // console.log(action)
    // dispatch(action)

    dispatch(addSong(song));
  };
  const handleSongRemove = (song) => {
    // Remove song from list of songs
    dispatch(removeSongs(song));
  };

  return (
    <div className="content">
      <div className="table-header">
        <h3 className="subtitle is-3">Song Playlist</h3>
        <div className="buttons">
          <button
            onClick={() => handleSongAdd(createRandomSong())}
            className="button is-link"
          >
            + Add Song to Playlist
          </button>
        </div>
      </div>
      <ul>
        {songPlaylist.map((song) => (
          <li key={song}>
            {song}
            <button
              onClick={() => handleSongRemove(song)}
              className="button is-danger"
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SongPlaylist;

// Changing state
//1️⃣ Add a reducer to one of your slices that changes the state in some particular way
//2️⃣ Export the action creator that the slice automatically creates
//3️⃣ Find the component that you want to dispatch from
//4️⃣ Import the action creator function and "useDispatch" hook from react-redux
//5️⃣ Call the useDispatch hook to get access to the dispatch function
//6️⃣ When the user does something, call the action creator to get an action object with type and payload, then dispatch it


// Accessing state from the store
//1️⃣ find the component that need to access some state
//2️⃣ import the useSelector hook from react-redux 
//3️⃣ call the hook passing in the selector call back function 
//4️⃣ use the state, anytime the states changes the component will re-render