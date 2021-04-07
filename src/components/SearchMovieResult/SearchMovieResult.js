import React from 'react';
import noPosterAvailable from '../../images/noPosterAvailable.jpg';
import ButtonControls from '../ButtonControls/ButtonControls';
import './SearchMovieResult.css';

const SearchMovieResult = ({ movies }) => {
  return (
    <>
      <div className='search-movie-result-container'>
        <div className='grid-wrapper'>
          {movies.map((movie) => {
            return (
              <div key={movie.id} className='image-card'>
                {movie.poster_path !== null ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                    style={{ width: 160 }}
                    alt=''
                  />
                ) : (
                  <img src={noPosterAvailable} style={{ width: 160 }} alt='' />
                )}

                <ButtonControls movie={movie} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SearchMovieResult;
