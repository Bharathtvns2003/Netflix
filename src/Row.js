import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './Row.css';

import { fetchMoviesRequest } from './action';

const mapStateToProps = state => ({
  movieData: state,
});

const mapDispatchToProps = dispatch => ({
  fetchMoviesRequestFunc: data => dispatch(fetchMoviesRequest(data)),
});


function Row({ genre, apiUrl, isLargeRow = false, fetchMoviesRequestFunc, movieData }) {
  const { moviesByGenre } = movieData;

  useEffect(() => {
    fetchMoviesRequestFunc({ genre, apiUrl });
  }, [genre, apiUrl, fetchMoviesRequestFunc]);  

  // Render only when movies data is available
  if (!moviesByGenre || !moviesByGenre[genre]) {
    return <div>Loading...</div>;
  }

  return (
    <div className='row'>
      <br />
      <h2>{genre}</h2>
      <div className="row_posters">
        {moviesByGenre[genre].map((movie) => {
          const imageUrl = `https://image.tmdb.org/t/p/original/${isLargeRow ? movie.poster_path : movie.backdrop_path}`;
          return (
            <img
              className={`row_poster ${isLargeRow && 'row_posterLarge'}`}
              key={movie.id}
              src={imageUrl}
              alt={movie.name}
            />
          );
        })}
      </div>
    </div>
  );
}

Row.propTypes = {
  genre: PropTypes.string.isRequired,
  apiUrl: PropTypes.string.isRequired,
  isLargeRow: PropTypes.bool,
  fetchMoviesRequestFunc: PropTypes.func.isRequired,
  movieData: PropTypes.object.isRequired,
};


export default connect(mapStateToProps, mapDispatchToProps)(Row);
