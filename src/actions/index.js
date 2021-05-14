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
