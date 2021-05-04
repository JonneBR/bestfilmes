import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import SlideShow from '../SlideShow/SlideShow';

const TrendingWeek = () => {
  const { addToExploreList, exploreList } = useContext(GlobalContext);

  const fetchTrendingWeek = async () => {
    const apiCall = await fetch(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_TMDB_KEY}&language=pt-BR`
    );
    const trendingWeek = await apiCall.json();
    addToExploreList(trendingWeek.results);
  };
  if (exploreList.length === 0) {
    fetchTrendingWeek();
  }
  return (
    <>
      {/* Why trending is running so much? */}
      {exploreList.length > 0 && <SlideShow movie={exploreList} />}
    </>
  );
};

export default TrendingWeek;
