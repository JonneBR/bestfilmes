import React from 'react';
import { useLocation } from 'react-router-dom';
import cover1 from '../../images/cover1.PNG';
import './MovieInformation.css';

const MovieInformation = () => {
  const location = useLocation();
  console.log(location.state.params);
  return (
    <>
      <div className='container-movie-information'>
        <div className='header-content-container'>
          <div className='header-content'>
            <img src={cover1} alt='' />
            <div className='header-content-title'>
              Pirates of the Caribbean: Dead Man's Chest (2006)
              <i className='far fa-star'></i>
              <div className='header-content-overview'>
                Captain Jack Sparrow works his way out of a blood debt with the
                ghostly Davy Jones to avoid eternal damnation.
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
