import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { GlobalContext } from '../../context/GlobalState';
import { handleWatchlist } from '../functions/handleWatchlist/handleWatchlist';

// Criar funções e chama-las para manipular os eventos que ocorrem quando é clicado o botão

const ButtonControls = ({ movie }) => {
  const history = useHistory();

  const {
    addMovieToMylist,
    removeMovieFromMylist,
    addMovieToFavoriteList,
    removeMovieFromFavoriteList,
    myFavoriteMovies,
    mylistMovies,
  } = useContext(GlobalContext);

  const doesFavoriteExist = myFavoriteMovies.find(
    (myfavoriteMovie) => myfavoriteMovie.id === movie.id
  );

  const movieExist = mylistMovies.find(
    (mylistMovie) => mylistMovie.id === movie.id
  );

  const favoriteHandleButton = () => {
    if (doesFavoriteExist) return removeMovieFromFavoriteList(movie);
    return addMovieToFavoriteList(movie);
  };

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
          <button onClick={favoriteHandleButton} className='add-favorites'>
            <i
              className={
                doesFavoriteExist ? 'btn-success far fa-star' : 'far fa-star'
              }
            ></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default ButtonControls;
