// sagas.js
import { put, takeEvery, call } from 'redux-saga/effects';
import axios from './axios';
import {
  fetchMoviesRequest,
  fetchMoviesSuccess,
  fetchMoviesFailure,
} from './action';
import { FETCH_MOVIES_REQUEST } from './rowtype';

function* fetchMoviesByGenreSaga(action) {
  try {
    const { genre, apiUrl } = action.payload;
    const response = yield call(axios.get, apiUrl);
    const movies = response.data.results;
    yield put(fetchMoviesSuccess(genre, movies));
  } catch (error) {
    yield put(fetchMoviesFailure(error.message));
  }
}

export function* watchFetchMoviesByGenre() {
  yield takeEvery(FETCH_MOVIES_REQUEST, fetchMoviesByGenreSaga);
}
