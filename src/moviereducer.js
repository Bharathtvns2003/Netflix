// reducer.js
import { FETCH_MOVIES_FAILURE, FETCH_MOVIES_REQUEST, FETCH_MOVIES_SUCCESS } from './rowtype';

const initialState = {
  loading: false,
  moviesByGenre: {
  },
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_MOVIES_SUCCESS:
      const { genre, movies } = action.payload;
      return {
        ...state,
        loading: false,
        moviesByGenre: {
          ...state.moviesByGenre,
          [genre]: movies,
        },
      };
    case FETCH_MOVIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default reducer;
