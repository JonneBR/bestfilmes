import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
  exploreList: [],
  topRated: [],
  popularMovies: [],
  upComing: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // useEffect(() => {
  //   localStorage.setItem('exploreList', JSON.stringify(state.exploreList));
  //   localStorage.setItem('topRated', JSON.stringify(state.topRated));
  // }, [state]);
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

  return (
    <GlobalContext.Provider
      value={{
        exploreList: state.exploreList,
        topRated: state.topRated,
        popularMovies: state.popularMovies,
        upComing: state.upComing,
        addToExploreList,
        addToTopRatedList,
        addToPopularList,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
