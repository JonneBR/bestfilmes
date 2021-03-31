import React, { useState } from 'react';
import './Home.css';
import { HomeExplore } from '../HomeExplore/HomeExplore';

export const Home = () => {
  const [results, setResults] = useState([]);

  const onChange = (e) => {
    setResults(e.target.value);
    // console.log(results.length);

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setResults(data.results);
          // console.log(data.results);
        } else {
          setResults([]);
        }
      });
  };

  return (
    <div className='container'>
      <div className='header'>
        <div className='main-image'>
          <div className='content-text'>
            <div className='content-title'>
              <p>Bem vindo!</p>
            </div>
            <div className='content-description'>
              <p>
                Explore <strong>milhares</strong> de filmes e TV Shows
              </p>
            </div>
            <div className='input-container'>
              <div className='input-button-wrapper'>
                <input
                  type='text'
                  placeholder='Pesquisar filme'
                  onChange={onChange}
                />
                <button>PESQUISAR</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {results.length > 0 ? console.log('maior') : <HomeExplore />}
    </div>
  );
};
