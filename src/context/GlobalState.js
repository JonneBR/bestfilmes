import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
  exploreList: [],
  topRated: [],
  trendingWeek: [],
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

  return (
    <GlobalContext.Provider
      value={{
        exploreList: state.exploreList,
        topRated: state.topRated,
        trendingWeek: state.trendingWeek,
        upComing: state.upComing,
        addToExploreList,
        addToTopRatedList,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
