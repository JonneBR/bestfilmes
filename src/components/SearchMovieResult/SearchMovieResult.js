import React from 'react';
import { useHistory } from 'react-router-dom';
import noPosterAvailable from '../../images/noPosterAvailable.jpg';
import './SearchMovieResult.css';

const SearchMovieResult = ({ movies }) => {
  const history = useHistory();

  //Routing and passing parameters to MovieInformation
  const handleMovieInformation = (id) => {
    const movieClickedInfo = movies.find(
      (movieSelected) => movieSelected.id === id
    );
    history.push('/MovieInformation', {
      params: movieClickedInfo,
      movie: movies,
    });
  };

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

                <div className='inner-cards-control'>
                  <button
                    className='more-informations'
                    onClick={() => handleMovieInformation(movie.id)}
                  >
                    <i className='far fa-plus-square'></i>
                  </button>

                  <div className='buttons-wrapper'>
                    <button className='add-mylist'>
                      <i className='fas fa-folder-plus'></i>
                    </button>
                    <button className='add-watchlist'>
                      <i className='far fa-eye'></i>
                    </button>
                    <button className='add-favorites'>
                      <i className='far fa-star'></i>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SearchMovieResult;