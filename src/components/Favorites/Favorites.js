import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import './Favorites.css';

export const Favorites = () => {
  const { notificationBadgeCount, setNotificationBadgeCount } = useContext(
    GlobalContext
  );
  console.log(notificationBadgeCount);

  return (
    <>
      <div className='container'>
        <div className='header'>
          <div className='main-image-favorites'></div>
        </div>
        <div className='title-section'>
          <div className='slider-section'>
            <h1>Favorites</h1>
          </div>
        </div>
      </div>
      {/* <h1>FAVORITES</h1> */}
    </>
  );
};
