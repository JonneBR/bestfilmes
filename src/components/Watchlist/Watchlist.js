import React from 'react';
import { useLocation } from 'react-router';
import './Watchlist.css';

const Watchlist = () => {
  const location = useLocation();
  console.log(location.state.params);
  return (
    <>
      <div className='container'>
        <div className='header'>
          <div className='main-image-watchlist'></div>
        </div>
        <div className='title-section'>
          <div className='slider-section'>
            <h1>Assistir</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Watchlist;
