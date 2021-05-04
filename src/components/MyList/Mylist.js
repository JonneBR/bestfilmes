import React, { useContext } from 'react';
import './Mylist.css';
import noPosterAvailable from '../../images/noPosterAvailable.jpg';
import { GlobalContext } from '../../context/GlobalState';
import ButtonControls from '../ButtonControls/ButtonControls';

export const Mylist = () => {
  const { mylistMovies } = useContext(GlobalContext);
  return (
    <>
      <div className='container'>
        <div className='header'>
          <div className='main-image-mylist'></div>
        </div>
        <div className='title-section'>
          <div className='slider-section'>
            <h1>Minha lista</h1>
          </div>
        </div>
        {mylistMovies.length > 0 ? (
          <div className='search-movie-result-container'>
            <div className='grid-wrapper'>
              {mylistMovies.map((movie) => {
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
            <h1>Não há filmes adicionados em sua lista</h1>
          </div>
        )}
      </div>
    </>
  );
};
