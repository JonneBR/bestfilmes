import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { GlobalContext } from '../../context/GlobalState';

//https://api.themoviedb.org/3/movie/{movie_id}/videos?api_key=<<api_key>>&language=en-US
//https://www.youtube.com/watch?v=

const ButtonControls = ({ movie }) => {
  const { addMylistClickedButton, mylistClickedButton } = useContext(
    GlobalContext
  );
  const { removeMylistClickedButton } = useContext(GlobalContext);

  const movieExist = mylistClickedButton.find(
    (mylistMovie) => mylistMovie.id === movie.id
  );
  const history = useHistory();

  //Routing and passing parameters to MovieInformation
  const handleMovieInformation = (movie) => {
    // const movieClickedInfo = movie.find(
    //   (movieSelected) => movieSelected.id === id
    // );
    history.push('/MovieInformation', {
      params: movie,
      //   movie: movie,
    });
  };

  const handleWatchlist = (movie) => {
    history.push('/watchlist', {
      params: movie,
    });
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
                ? () => removeMylistClickedButton(movie)
                : () => addMylistClickedButton(movie)
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
            onClick={() => handleWatchlist(movie)}
            className='add-watchlist'
          >
            <i className='far fa-eye'></i>
          </button>
          <button className='add-favorites'>
            <i className='far fa-star'></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default ButtonControls;
