import React from 'react';
import { useLocation } from 'react-router-dom';
import cover1 from '../../images/cover1.PNG';
import './MovieInformation.css';

const MovieInformation = () => {
  const location = useLocation();

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
              {`${location.state.params.title} (2020)`}
              <i className='far fa-star'></i>
              <div className='header-content-overview'>
                {location.state.params.overview}
              </div>
              <i className='fas fa-folder-plus'></i>
              <i className='far fa-eye'></i>
            </div>
          </div>
        </div>
        <h1>MOVIE INFORMATION</h1>
      </div>
    </>
  );
};

export default MovieInformation;
