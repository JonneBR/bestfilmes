import React from 'react';
import { useLocation } from 'react-router-dom';
import SimilarMovies from '../SimilarMovies/SimilarMovies';
import './MovieInformation.css';

const MovieInformation = () => {
  const location = useLocation();
  const movieReleaseYear = location.state.params.release_date.split('-')[0];
  return (
    <>
      <div className='container-movie-information'>
        <div className='header-content-container'>
          <div className='header-content'>
            <img
              src={`https://image.tmdb.org/t/p/w200/${location.state.params.poster_path}`}
              alt=''
            />
            <div className='header-content-title'>
              {`${location.state.params.title} (${movieReleaseYear})`}
              <i className='far fa-star'></i>
              <div className='header-content-overview'>
                {location.state.params.overview}
              </div>
              <i className='fas fa-folder-plus'></i>
              <i className='far fa-eye'></i>
            </div>
          </div>
        </div>
        <div className='slider-section'>
          <h1>TITULOS SEMELHANTES</h1>
        </div>
        <SimilarMovies id={location.state.params.id} />
      </div>
    </>
  );
};

export default MovieInformation;
