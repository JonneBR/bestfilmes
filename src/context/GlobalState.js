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

  return (
    <GlobalContext.Provider
      value={{
        exploreList: state.exploreList,
        topRated: state.topRated,
        popularMovies: state.popularMovies,
        upComingMovies: state.upComingMovies,
        addToExploreList,
        addToTopRatedList,
        addToPopularList,
        addToUpComingList,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
