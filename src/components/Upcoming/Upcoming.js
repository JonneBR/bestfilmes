import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import SlideShow from '../SlideShow/SlideShow';

export const Upcoming = () => {
  const { addToUpComingList, upComingMovies } = useContext(GlobalContext);
  if (upComingMovies.length === 0) {
    fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          addToUpComingList(data.results);
          console.log('entrando');
        } else {
          console.log('erro');
        }
      });
  }
  return (
    <>
      <SlideShow movie={upComingMovies} />
    </>
  );
};
