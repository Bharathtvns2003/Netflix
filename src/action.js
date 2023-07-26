import { FETCH_MOVIES_FAILURE, FETCH_MOVIES_REQUEST, FETCH_MOVIES_SUCCESS, } from "./rowtype";

// actions.js
export const fetchMoviesRequest = ({ genre, apiUrl }) => ({
  type: FETCH_MOVIES_REQUEST,
  payload: { genre, apiUrl },
});

export const fetchMoviesSuccess = (genre, movies) => ({
  type: FETCH_MOVIES_SUCCESS,
  payload: { genre, movies },
});

export const fetchMoviesFailure = (error) => ({
  type: FETCH_MOVIES_FAILURE,
  payload: { error },
});
