import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';

export const Favorites = () => {
  const { notificationBadgeCount, setNotificationBadgeCount } = useContext(
    GlobalContext
  );
  console.log(notificationBadgeCount);

  return (
    <>
      <h1>FAVORITES</h1>
    </>
  );
};
