import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { GlobalContext } from '../../context/GlobalState';
import { handleWatchlist } from '../functions/handleWatchlist/handleWatchlist';

const ButtonControls = ({ movie }) => {
  const history = useHistory();

  const { addMovieToMylist, mylistMovies } = useContext(GlobalContext);
  const { removeMovieFromMylist } = useContext(GlobalContext);
  const { addMovieToFavoriteList } = useContext(GlobalContext);
  const { removeMovieFromFavoriteList, myFavoriteMovies } = useContext(
    GlobalContext
  );

  const movieExist = mylistMovies.find(
    (mylistMovie) => mylistMovie.id === movie.id
  );

  const movieFavoriteExist = myFavoriteMovies.find(
    (myfavoriteMovie) => myfavoriteMovie.id === movie.id
  );

  const handleMovieInformation = (movie) => {
    history.push('/MovieInformation', {
      params: movie,
    });
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className='inner-cards-control'>
        <button
          onClick={() => handleMovieInformation(movie)}
          className='more-informations'
        >
          <i className='far fa-plus-square'></i>
        </button>

        <div className='buttons-wrapper'>
          <button
            onClick={
              movieExist
                ? () => removeMovieFromMylist(movie)
                : () => addMovieToMylist(movie)
            }
            className='add-mylist'
          >
            <i
              className={
                movieExist
                  ? 'btn-success fas fa-folder-plus'
                  : 'fas fa-folder-plus'
              }
            ></i>
          </button>
          <button
            onClick={() => handleWatchlist(movie, history)}
            className='add-watchlist'
          >
            <i className='far fa-eye'></i>
          </button>
          <button
            onClick={
              movieFavoriteExist
                ? () => removeMovieFromFavoriteList(movie)
                : () => addMovieToFavoriteList(movie)
            }
            className='add-favorites'
          >
            <i
              className={
                movieFavoriteExist ? 'btn-success far fa-star' : 'far fa-star'
              }
            ></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default ButtonControls;
