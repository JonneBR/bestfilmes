import React from 'react';
import { useLocation } from 'react-router-dom';

const MovieInformation = () => {
  const location = useLocation();
  console.log(location.state.params);
  return (
    <>
      <h1>MOVIE INFORMATION</h1>
    </>
  );
};

export default MovieInformation;
