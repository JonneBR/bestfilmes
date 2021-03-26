import React, { useState, useEffect } from 'react';
import { SlideShow } from '../SlideShow/SlideShow';

export const Upcoming = () => {
  const [upcoming, setUpcoming] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setUpcoming(data.results);
        } else {
          console.log('erro');
        }
      });
  }, []);
  return (
    <>
      <SlideShow movie={upcoming} />
    </>
  );
};