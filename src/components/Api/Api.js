import React, { useEffect, useState } from 'react';
import { HomeExplore } from '../HomeExplore/HomeExplore';

export const Api = () => {
  //This function will save the result in GlobalContext
  function teste() {
    console.log('chamado', results);
  }
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=pirates`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setResults(data.results);
        } else {
          console.log('erro');
        }
      });
  }, []);

  return <>{results.length > 0 && <HomeExplore movie={results} />}</>;
};
