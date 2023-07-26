// rootSaga.js
import { all } from 'redux-saga/effects';
import { watchFetchMoviesByGenre } from './saga';

export default function* rootSaga() {
  yield all([watchFetchMoviesByGenre()]);
}
