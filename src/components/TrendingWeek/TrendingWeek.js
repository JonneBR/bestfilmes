import React, { useEffect, useState } from 'react';
import { SlideShow } from '../SlideShow/SlideShow';

const TrendingWeek = () => {
  const [trending, setTrending] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_TMDB_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setTrending(data.results);
        } else {
          console.log('erro');
        }
      });
  }, []);

  return (
    <div>
      {/* Why trending is running so much? */}
      {/* {console.log('trending1', trending)} */}
      <SlideShow movie={trending} />
    </div>
  );
};

export default TrendingWeek;
