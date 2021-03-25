import React from 'react';
import { SlideShow } from '../SlideShow/SlideShow';
import './HomeExplore.css';

export const HomeExplore = () => {
  return (
    <div className='movie-container'>
      <div className='slider-wrapper'>
        <div className='slider-section'>
          <h1>EXPLORE</h1>
        </div>
        {/* <div className='movie-card'></div> */}
        <SlideShow />
      </div>
    </div>
  );
};
