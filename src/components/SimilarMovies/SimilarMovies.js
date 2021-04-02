import React, { useState, useEffect } from 'react';
import noPosterAvailable from '../../images/noPosterAvailable.jpg';

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
  }, []);
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

                <div className='inner-cards-control'>
                  <button
                    className='more-informations'
                    // onClick={() => handleMovieInformation(movie.id)}
                  >
                    <i className='far fa-plus-square'></i>
                  </button>

                  <div className='buttons-wrapper'>
                    <button className='add-mylist'>
                      <i className='fas fa-folder-plus'></i>
                    </button>
                    <button className='add-watchlist'>
                      <i className='far fa-eye'></i>
                    </button>
                    <button className='add-favorites'>
                      <i className='far fa-star'></i>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SimilarMovies;
