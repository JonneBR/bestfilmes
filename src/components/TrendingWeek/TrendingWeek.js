import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import { SlideShow } from '../SlideShow/SlideShow';

const TrendingWeek = () => {
  const [trending, setTrending] = useState([]);
  const { addToExploreList, exploreList } = useContext(GlobalContext);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_TMDB_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setTrending(data.results);
          addToExploreList(data.results);
        } else {
          console.log('erro');
        }
      });
  }, []);

  return (
    <>
      {/* Why trending is running so much? */}
      {/* {console.log('trending1', trending)} */}
      <SlideShow movie={trending} />
    </>
  );
};

export default TrendingWeek;
