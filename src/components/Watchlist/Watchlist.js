import React, { useState } from 'react';
import { useLocation } from 'react-router';
import './Watchlist.css';

const Watchlist = () => {
  const [movieTrailer, setMovieTrailer] = useState('');
  const location = useLocation();
  console.log(location.state.params.id);

  const fetchMovieTrailer = async () => {
    const apiCall = await fetch(
      `https://api.themoviedb.org/3/movie/${location.state.params.id}/videos?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US
      `
    );
    const movieData = await apiCall.json();
    console.log('trailer', movieData.results);
  };
  if (location.state.params.id) {
    fetchMovieTrailer();
  } else {
    console.log('exibindo');
  }

  return (
    <>
      <div className='container'>
        <div className='header'>
          <div className='main-image-watchlist'></div>
        </div>
        <div className='title-section'>
          <div className='video-trailer-section'>
            <h1>Assistir</h1>
            <iframe
              autoPlay
              style={{
                width: '1210px',
                height: '800px',
                margin: 'auto',
                display: 'block',
              }}
              src='https://www.youtube.com/embed/7sDY4m8KNLc?autoplay=1'
              frameBorder='0'
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Watchlist;
