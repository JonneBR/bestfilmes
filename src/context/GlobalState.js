import React, { createContext, useEffect, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
  // exploreList: [],
  exploreList: localStorage.getItem('exploreList')
    ? JSON.parse(localStorage.getItem('exploreList'))
    : [],
  topRated: localStorage.getItem('topRated')
    ? JSON.parse(localStorage.getItem('topRated'))
    : [],
  popularMovies: localStorage.getItem('popularMovies')
    ? JSON.parse(localStorage.getItem('popularMovies'))
    : [],
  upComingMovies: localStorage.getItem('upComingMovies')
    ? JSON.parse(localStorage.getItem('upComingMovies'))
    : [],
  mylistMovies: localStorage.getItem('mylistMovies')
    ? JSON.parse(localStorage.getItem('mylistMovies'))
    : [],
  notificationBadgeCount: 0,
  myFavoriteMovies: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem('exploreList', JSON.stringify(state.exploreList));
    localStorage.setItem('topRated', JSON.stringify(state.topRated));
    localStorage.setItem('popularMovies', JSON.stringify(state.popularMovies));
    localStorage.setItem(
      'upComingMovies',
      JSON.stringify(state.upComingMovies)
    );
    localStorage.setItem('mylistMovies', JSON.stringify(state.mylistMovies));
  }, [state]);

  //actions
  const addToExploreList = (movie) => {
    dispatch({ type: 'ADD_TO_EXPLORE_LIST', payload: movie });
  };

  const addToTopRatedList = (movie) => {
    dispatch({ type: 'ADD_TO_TOP_RATED_LIST', payload: movie });
  };

  const addToPopularList = (movie) => {
    dispatch({ type: 'ADD_TO_POPULAR_LIST', payload: movie });
  };
  const addToUpComingList = (movie) => {
    dispatch({ type: 'ADD_TO_UP_COMING_LIST', payload: movie });
  };

  const addMovieToMylist = (movie) => {
    dispatch({ type: 'ADD_MOVIE_TO_MYLIST', payload: movie });
  };

  const removeMovieFromMylist = (movie) => {
    dispatch({ type: 'REMOVE_MOVIE_FROM_MYLIST', payload: movie });
  };

  const notificationCountNumber = (clicks) => {
    dispatch({ type: 'NOTIFICATION_COUNT_NUMBER', payload: clicks });
  };

  const addMovieToFavoriteList = (movie) => {
    dispatch({ type: 'ADD_MOVIE_TO_FAVORITE_LIST', payload: movie });
  };

  return (
    <GlobalContext.Provider
      value={{
        exploreList: state.exploreList,
        topRated: state.topRated,
        popularMovies: state.popularMovies,
        upComingMovies: state.upComingMovies,
        mylistMovies: state.mylistMovies,
        notificationBadgeCount: state.notificationBadgeCount,
        myFavoriteMovies: state.myFavoriteMovies,
        addToExploreList,
        addToTopRatedList,
        addToPopularList,
        addToUpComingList,
        addMovieToMylist,
        removeMovieFromMylist,
        notificationCountNumber,
        addMovieToFavoriteList,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
