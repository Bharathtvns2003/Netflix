import React from 'react';
import './Homescreen.css';

import Nav from './Nav';
import Banner from './Banner';
import requests from './Request';
import Row from './Row';

const rowsData = [
  { genre: 'NETFLIX ORIGINALS', apiUrl: requests.fetchNetflixOriginals, isLargeRow: true },
  { genre: 'Trending Now', apiUrl: requests.fetchTrending },
  { genre: 'Top Rated', apiUrl: requests.fetchTopRated },
  { genre: 'Action Movies', apiUrl: requests.fetchActionMovies },
  { genre: 'Comedy Movies', apiUrl: requests.fetchComedyMovies },
  { genre: 'Horror Movies', apiUrl: requests.fetchHorrorMovies },
  { genre: 'Romance Movies', apiUrl: requests.fetchRomanceMovies },
  { genre: 'Documentaries', apiUrl: requests.fetchDocumentaries },
];

export default function Homescreen() {
  return (
    <div className='homescreen'>
      <Nav />
      <Banner />

      {rowsData.map((rowData) => (
        <Row key={rowData.genre} {...rowData} />
      ))}
    </div>
  );
}
