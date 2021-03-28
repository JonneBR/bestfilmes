import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import SlideShow from '../SlideShow/SlideShow';

export const TopRated = () => {
  const { addToTopRatedList, topRated } = useContext(GlobalContext);
  useEffect(
    () => {
      fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
      )
        .then((res) => res.json())
        .then((data) => {
          if (!data.errors) {
            addToTopRatedList(data.results);
          } else {
            console.log('erro');
          }
        });
    },
    // eslint-disable-next-line
    [],
    addToTopRatedList
  );
  return <>{topRated.length > 0 && <SlideShow movie={topRated} />}</>;
};
