// sagas.test.js
import { runSaga } from 'redux-saga';
import axios from './axios'; // Replace with your mock for axios if needed
import {
  fetchMoviesSuccess,
  fetchMoviesFailure,
} from './action';
import { fetchMoviesByGenreSaga } from './sagas';
import { FETCH_MOVIES_REQUEST } from './rowtype';

// Mock the API response
const mockApiResponse = {
  data: {
    results: [
      { id: 1, title: 'Movie 1' },
      { id: 2, title: 'Movie 2' },
      // Add more movie objects as needed
    ],
  },
};

// Mock the action payload
const mockAction = {
  type: FETCH_MOVIES_REQUEST,
  payload: {
    genre: 'action',
    apiUrl: '/api/movies/action', // Replace with the correct API URL
  },
};

jest.mock('./axios', () => ({
  get: jest.fn(() => Promise.resolve(mockApiResponse)),
}));

describe('fetchMoviesByGenreSaga', () => {
  it('should dispatch fetchMoviesSuccess with movies data on successful API call', async () => {
    const dispatched = [];
    await runSaga({
      dispatch: (action) => dispatched.push(action),
    }, fetchMoviesByGenreSaga, mockAction);

    expect(axios.get).toHaveBeenCalledWith('/api/movies/action');
    expect(dispatched).toContainEqual(fetchMoviesSuccess('action', mockApiResponse.data.results));
  });

  it('should dispatch fetchMoviesFailure with error message on API call failure', async () => {
    const error = new Error('API error');
    axios.get.mockRejectedValueOnce(error);

    const dispatched = [];
    await runSaga({
      dispatch: (action) => dispatched.push(action),
    }, fetchMoviesByGenreSaga, mockAction);

    expect(axios.get).toHaveBeenCalledWith('/api/movies/action');
    expect(dispatched).toContainEqual(fetchMoviesFailure(error.message));
  });
});
