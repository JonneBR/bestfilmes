import React, { useEffect, useState } from 'react';
import { SlideShow } from '../SlideShow/SlideShow';

export const TopRated = () => {
  const [topRated, setTopRated] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setTopRated(data.results);
        } else {
          console.log('erro');
        }
      });
  }, []);
  return (
    <>
      <SlideShow movie={topRated} />
    </>
  );
};
