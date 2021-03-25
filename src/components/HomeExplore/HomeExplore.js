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
        <div className='slider-section'>
          <h1>MAIS VOTADOS</h1>
        </div>
        <SlideShow />

        <div className='slider-section'>
          <h1>MAIS POPULARES</h1>
        </div>
        <SlideShow />
      </div>
    </div>
  );
};
