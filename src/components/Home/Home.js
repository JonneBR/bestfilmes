import React from 'react';
import './Home.css';

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
          </div>
          <div className='input-container'>
            <input type='text' placeholder='Pesquisar filme' />
          </div>
        </div>
      </div>
      <h1></h1>
    </div>
  );
};
