import React, { useState } from 'react';
import { useLocation } from 'react-router';
import './Watchlist.css';

const Watchlist = () => {
  const [movieTrailer, setMovieTrailer] = useState('');
  const location = useLocation();

  const fetchMovieTrailer = async () => {
    const apiCall = await fetch(
      `https://api.themoviedb.org/3/movie/${location.state.params.id}/videos?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US
      `
    );
    const movieData = await apiCall.json();
    //THIS LINE BELLOW IS ONLY FOR TESTING, MUST BE REFACTORED
    const trailer = movieData.results.filter(
      (movie) => movie.type === 'Trailer'
    );
    trailer.length > 0
      ? setMovieTrailer(trailer[0]['key'])
      : setMovieTrailer(false);
  };

  if (location.state !== undefined && movieTrailer === '') {
    fetchMovieTrailer();
  }

  return (
    <>
      <div className='container'>
        <div className='header'>
          <div className='main-image-watchlist'></div>
        </div>
        {/* <div className='title-section'> */}
        <div className='video-trailer-section'>
          {movieTrailer ? (
            <iframe
              autoPlay
              style={{
                width: '1210px',
                height: '800px',
                margin: 'auto',
                marginTop: '50px',
                display: 'block',
              }}
              src={`https://www.youtube.com/embed/${movieTrailer}?autoplay=1`}
              frameBorder='0'
            ></iframe>
          ) : movieTrailer === false ? (
            <div className='no-movies-container'>
              <h1>NÃO HÁ TRAILER PARA ESTE FILME</h1>
            </div>
          ) : (
            <div className='no-movies-container'>
              <h1>CLIQUE EM UM FILME ANTES PARA VER SEU TRAILER</h1>
            </div>
          )}
        </div>
        {/* </div> */}
      </div>
    </>
  );
};

export default Watchlist;
