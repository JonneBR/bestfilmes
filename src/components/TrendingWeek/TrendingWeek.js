import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import SlideShow from '../SlideShow/SlideShow';

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
      {/* {console.log(trending)} */}
      {/* Why trending is running so much? */}
      {exploreList.length > 0 && <SlideShow movie={[]} />}
      {/* <SlideShow movie={[]} /> */}
    </>
  );
};

export default TrendingWeek;
