import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import SlideShow from '../SlideShow/SlideShow';

const TrendingWeek = () => {
  const { addToExploreList, exploreList } = useContext(GlobalContext);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_TMDB_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          addToExploreList(data.results);
        } else {
          console.log('erro');
        }
      });
  }, []);

  return (
    <>
      {/* Why trending is running so much? */}
      {exploreList.length > 0 && <SlideShow movie={exploreList} />}
      {/* <SlideShow movie={[]} /> */}
    </>
  );
};

export default TrendingWeek;
