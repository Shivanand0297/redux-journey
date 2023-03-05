import { createRandomMovie } from "../data";
import { useSelector, useDispatch } from "react-redux";
import { addMovie, removeMovie } from "../store";

function MoviePlaylist() {
  const moviePlaylist = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  const handleMovieAdd = (movie) => {
    dispatch(addMovie(movie));
  };
  const handleMovieRemove = (movie) => {
    dispatch(removeMovie(movie));
  };

  return (
    <div className="content">
      <div className="table-header">
        <h3 className="subtitle is-3">Movie Playlist</h3>
        <div className="buttons">
          <button
            onClick={() => handleMovieAdd(createRandomMovie())}
            className="button is-link"
          >
            + Add Movie to Playlist
          </button>
        </div>
      </div>
      <ul>
        {moviePlaylist.map((movie) => (
          <li key={movie}>
            {movie}
            <button
              onClick={() => handleMovieRemove(movie)}
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

export default MoviePlaylist;
