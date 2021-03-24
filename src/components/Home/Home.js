import React from 'react';
import './Home.css';
import Slider from 'react-slick';
import { HomeExplore } from '../HomeExplore/HomeExplore';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

export const Home = () => {
  const settings = {
    className: 'center',
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 5,
    swipeToSlide: true,
    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
  };

  return (
    <div className='container'>
      <div className='header'>
        <div className='main-image'>
          <div className='content-text'>
            <div className='content-title'>
              <p>Bem vindo!</p>
            </div>
            <div className='content-description'>
              <p>
                Explore <strong>milhares</strong> de filmes e TV Shows
              </p>
            </div>
            <div className='input-container'>
              <div className='input-button-wrapper'>
                <input type='text' placeholder='Pesquisar filme' />
                <button>PESQUISAR</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <HomeExplore />
    </div>
  );
};
