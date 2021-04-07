import React, { useState, useEffect } from 'react';
import noPosterAvailable from '../../images/noPosterAvailable.jpg';
import './SimilarMovies.css';
import ButtonControls from '../ButtonControls/ButtonControls';

const SimilarMovies = ({ id }) => {
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
  }, [id]);
  return (
    <>
      <div className='search-movie-result-container'>
        <div className='grid-wrapper'>
          {similarMovies.map((movie) => {
            return (
              <div key={movie.id} className='image-card'>
                {movie.poster_path !== null ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                    style={{ width: 160 }}
                    alt=''
                  />
                ) : (
                  <img src={noPosterAvailable} style={{ width: 160 }} alt='' />
                )}

                <ButtonControls movie={movie} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SimilarMovies;
