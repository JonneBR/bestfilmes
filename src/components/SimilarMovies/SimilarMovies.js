import React, { useState, useEffect } from 'react';

// https://api.themoviedb.org/3/movie/{id}/similar?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1

const SimilarMovies = ({ id }) => {
  console.log(id);
  const [similarMovies, setSimilarMovies] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setSimilarMovies(data.results);
        } else {
          console.log('erro');
        }
      });
  }, []);
  console.log('teste', similarMovies);
  return <></>;
};

export default SimilarMovies;
