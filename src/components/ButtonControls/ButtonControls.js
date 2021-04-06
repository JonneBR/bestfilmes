import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { GlobalContext } from '../../context/GlobalState';

const ButtonControls = ({ movie }) => {
  // console.log(movieData.id);

  const { addMylistClickedButton, mylistClickedButton } = useContext(
    GlobalContext
  );
  const movieExist = mylistClickedButton.find(
    (movieId) => movieId === movie.id
  );
  //   console.log([]);
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
                ? console.log('já clicado')
                : () => addMylistClickedButton(movie.id)
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
          <button className='add-watchlist'>
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
