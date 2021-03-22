import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export const Header = () => {
  const [click, setClick] = useState(false);

  const handleClickMenu = () => setClick(!click);

  return (
    <header>
      <div className='container'>
        <div className='brand'>
          <Link to='/'>BestFilmes</Link>
        </div>
        <div onClick={handleClickMenu} className='inner-content'>
          {click ? (
            <i className='fas fa-times'></i>
          ) : (
            <i className='fas fa-bars'></i>
          )}
        </div>
        <nav className='nav-wrapper'>
          <ul className={click ? 'nav-links active' : 'nav-links'}>
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
        </nav>
      </div>
    </header>
  );
};
