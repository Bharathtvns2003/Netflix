import React from 'react';
import './Homescreen.css';
import { useDispatch } from 'react-redux';
import Nav from './Nav';
import Banner from './Banner';
import requests from './Request';
import Row from './Row';
import { fetchmoviesFailure, fetchmoviesRequest, fetchmoviesSuccess } from './action';
import axios from './axios'

export default function Homescreen() {
  const dispatch = useDispatch();

  // Fetch movies by genre
  const fetchMoviesByGenre = (genre, fetchUrl) => {
    dispatch(fetchmoviesRequest());
    axios
      .get(fetchUrl)
      .then((response) => {
        console.log(response.data.results);
        const movies = response.data.results;
        dispatch(fetchmoviesSuccess(genre, movies));
      })
      .catch((error) => {
        dispatch(fetchmoviesFailure(error.message));
      });
  };

  return (
    <div className='homescreen'>
      <Nav></Nav>
      <Banner />

      {/* Use Row components with appropriate fetchUrl prop */}
      <Row
        title='NETFLIX ORIGINALS'
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
        fetchData={() => fetchMoviesByGenre('NETFLIX ORIGINALS', requests.fetchNetflixOriginals)}
      />
      <Row
        title='Trending Now'
        fetchUrl={requests.fetchTrending}
        fetchData={() => fetchMoviesByGenre('Trending Now', requests.fetchTrending)}
      />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} fetchData={() => fetchMoviesByGenre('Top Rated', requests.fetchTopRated)} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} fetchData={() => fetchMoviesByGenre('Action Movies', requests.fetchActionMovies)} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}fetchData={() => fetchMoviesByGenre("Comedy Movies", requests.fetchComedyMovies)} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}fetchData={() => fetchMoviesByGenre("Horror Movies", requests.fetchHorrorMovies)} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}fetchData={() => fetchMoviesByGenre("Romance Movies" , requests.fetchRomanceMovies)} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} fetchData={() => fetchMoviesByGenre("Documentaries", requests.fetchDocumentaries)} />
    </div>
  );
}
