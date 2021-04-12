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
    setMovieTrailer(trailer[0]['key']);
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
        <div className='title-section'>
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
            ) : (
              <h1>Assistir</h1>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Watchlist;
