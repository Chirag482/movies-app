//action types
export const ADD_MOVIES = "ADD_MOVIES";
export const ADD_FAVOURITE = "ADD_FAVOURITE";
export const REMOVE_FROM_FAV = "REMOVE_FROM_FAV";
export const SHOW_FAV = "SHOW_FAV";
//action creators
export function addMovies(movies) {
  return {
    type: ADD_MOVIES,
    movies: movies,
  };
}

export function addFavourite(movie) {
  return {
    type: ADD_FAVOURITE,
    movie: movie,
  };
}

export function removeFromFav(movie) {
  return {
    type: REMOVE_FROM_FAV,
    movie: movie,
  };
}

export function setShowFav(val) {
  return {
    type: SHOW_FAV,
    val,
  };
}

export function handleMovieSearch(movie) {
  const url = `http://www.omdbapi.com/?i=tt3896198&apikey=205c172a&t=${movie}`;
  return function (dispatch) {
    fetch(url)
      .then((response) => response.json())
      .then((movie) => {
        console.log("movie", movie);
        //dispatch an action to store the movie to the store
      });
  };
}
