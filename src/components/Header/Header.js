import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export const Header = () => {
  return (
    <header>
      <div className='container'>
        <div className='inner-content'>
          <div className='brand'>
            <Link to='/'>BestFilmes</Link>
          </div>
          <ul className='nav-links'>
            <li>
              <Link to='mylist'>Minha lista</Link>
            </li>
            <li>
              <Link to='watchlist'>Assistir</Link>
            </li>
            <li>
              <Link to='favorites'>Favoritos</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
