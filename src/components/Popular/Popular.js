import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import SlideShow from '../SlideShow/SlideShow';

export const Popular = () => {
  const { addToPopularList, popularMovies } = useContext(GlobalContext);
  if (popularMovies.length === 0) {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          addToPopularList(data.results);
        } else {
          console.log('erro');
        }
      });
  }
  return (
    <>
      <SlideShow movie={popularMovies} />
    </>
  );
};
