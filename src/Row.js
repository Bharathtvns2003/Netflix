import React, { useEffect } from 'react';
import './Row.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchmoviesRequest, fetchmoviesSuccess, fetchmoviesFailure } from './action';
import axios from './axios';

export default function Row({ title, fetchUrl, isLargeRow = false }) {
  const dispatch = useDispatch();
  const movies = useSelector(state => state.genres[title]);
  const error = useSelector(state => state.error);

  const fetchData = () => {
    dispatch(fetchmoviesRequest());
    axios
      .get(fetchUrl)
      .then((response) => {
        console.log(response.data.results);
        const movies = response.data.results;
        dispatch(fetchmoviesSuccess(title, movies));
      })
      .catch((error) => {
        dispatch(fetchmoviesFailure(error.message));
      });
  };

  useEffect(() => {
    fetchData();
  }, [fetchUrl]);

  // Render only when movies data is available
  if (!movies) {
    return <div>Loading...</div>;
  }

  return (
    <div className='row'>
      <br />
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.map((movie) => {
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
