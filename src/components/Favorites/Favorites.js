import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import './Favorites.css';

import noPosterAvailable from '../../images/noPosterAvailable.jpg';
import ButtonControls from '../ButtonControls/ButtonControls';

export const Favorites = () => {
  const { myFavoriteMovies } = useContext(GlobalContext);
  return (
    <>
      <div className='container'>
        <div className='header'>
          <div className='main-image-favorites'></div>
        </div>
        <div className='title-section'>
          <div className='slider-section'>
            <h1>Favorites</h1>
          </div>
        </div>
        {myFavoriteMovies.length > 0 ? (
          <div className='search-movie-result-container'>
            <div className='grid-wrapper'>
              {myFavoriteMovies.map((movie) => {
                return (
                  <div key={movie.id} className='image-card'>
                    {movie.poster_path !== null ? (
                      <img
                        src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                        style={{ width: 160 }}
                        alt=''
                      />
                    ) : (
                      <img
                        src={noPosterAvailable}
                        style={{ width: 160 }}
                        alt=''
                      />
                    )}

                    <ButtonControls movie={movie} />
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div className='no-movies-container'>
            <h1>Não há filmes adicionados em seus favoritos</h1>
          </div>
        )}
      </div>
    </>
  );
};
