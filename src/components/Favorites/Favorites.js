import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';

export const Favorites = () => {
  const { notificationCountNumber } = useContext(GlobalContext);
  const { notificationBadgeCount } = useContext(GlobalContext);
  console.log(notificationBadgeCount);

  // notificationBadgeCount > 0
  //   ? notificationCountNumber(1)
  //   : console.log('nao');
  return (
    <>
      <h1>FAVORITES</h1>
    </>
  );
};
