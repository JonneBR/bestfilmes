import React from 'react';
import { Popular } from '../Popular/Popular';
import { TopRated } from '../TopRated/TopRated';
import TrendingWeek from '../TrendingWeek/TrendingWeek';
import { Upcoming } from '../Upcoming/Upcoming';
import './HomeExplore.css';

export const HomeExplore = ({ movie }) => {
  //Chamar api aqui e passar o retorno de acordo com cada nome para SlideShow
  return (
    <div className='movie-container'>
      <div className='slider-wrapper'>
        <div className='slider-section'>
          <h1>EXPLORE</h1>
        </div>
        {/* <div className='movie-card'></div> */}
        <TrendingWeek />
        <div className='slider-section'>
          <h1>MAIS VOTADOS</h1>
        </div>
        <TopRated />
        <div className='slider-section'>
          <h1>POPULARES</h1>
        </div>
        {/* <Popular /> */}
        <div className='slider-section'>
          <h1>EM BREVE</h1>
        </div>
        {/* <Upcoming /> */}
      </div>
    </div>
  );
};
