import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../context/GlobalState';
import './Header.css';

export const Header = () => {
  const [click, setClick] = useState(false);
  const { notificationBadgeCount, setNotificationBadgeToZero } = useContext(
    GlobalContext
  );

  const handleClickMenu = () => setClick(!click);

  return (
    <nav className='NavbarItems'>
      <div className='brand'>
        <Link to='/'>BestFilmes</Link>
      </div>
      <div onClick={handleClickMenu} className='menu-icon'>
        {click ? (
          <i className='fas fa-times'></i>
        ) : (
          <i className='fas fa-bars'></i>
        )}
      </div>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li>
          <Link to='/mylist'>Minha lista</Link>
        </li>
        <li>
          <Link to='/watchlist'>Assistir</Link>
        </li>
        <li>
          <Link onClick={setNotificationBadgeToZero} to='/favorites'>
            Favoritos
          </Link>

          <strong
            className={
              notificationBadgeCount > 0
                ? 'notification'
                : 'notification active'
            }
          >
            {`+${notificationBadgeCount}`}
          </strong>
        </li>
      </ul>
    </nav>
  );
};
