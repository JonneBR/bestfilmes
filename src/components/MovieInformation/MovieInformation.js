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
          </div>
        </div>
        <h1>MOVIE INFORMATION</h1>
      </div>
    </>
  );
};

export default MovieInformation;
