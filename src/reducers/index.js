import {
  ADD_MOVIES,
  ADD_FAVOURITE,
  REMOVE_FROM_FAV,
  SHOW_FAV,
} from "../actions";

const initialMovieState = {
  list: [],
  favourites: [],
  showFav: false,
};
export default function movies(state = initialMovieState, action) {
  // if (action.type === ADD_MOVIES) {
  //   return {
  //     ...state, //using spread operators
  //     list: action.movies,
  //   };
  // }
  // return state;

  switch (action.type) {
    case ADD_MOVIES:
      return {
        ...state, //using spread operators
        list: action.movies,
      };
    case ADD_FAVOURITE:
      return {
        ...state,
        favourites: [action.movie, ...state.favourites],
      };
    case REMOVE_FROM_FAV:
      const filteredArray = state.favourites.filter(
        (movie) => movie.Title !== action.movie.Title
      );
      return {
        ...state,
        favourites: filteredArray,
      };
    case SHOW_FAV:
      return {
        ...state,
        showFav: action.val,
      };
    default:
      return state;
  }
}
