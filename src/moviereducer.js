const initialState = {
  loading: false,
  error: '',
  genres: {}, // Object to store movies by genre
};

const fetch_req = 'fetch_req';
const fetch_data = 'fetch_data';
const fetch_err = 'fetch_err';

  
const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case fetch_req:
      return {
        ...state,
        loading: true,
      };
    case fetch_data:
      const { genre, movies } = action.payload;

      return {
        ...state,
        loading: false,
        error: '',
        genres: {
          ...state.genres,
          [genre]: movies,
        },
      };
    case fetch_err:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

  export default moviesReducer;
  