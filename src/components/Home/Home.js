import React from 'react';
import './Home.css';
import { HomeExplore } from '../HomeExplore/HomeExplore';

export const Home = () => {
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
