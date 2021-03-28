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

  //actions
  const addToExploreList = (movie) => {
    dispatch({ type: 'ADD_TO_EXPLORE_LIST', payload: movie });
  };

  return (
    <GlobalContext.Provider
      value={{
        exploreList: state.exploreList,
        topRated: state.topRated,
        trendingWeek: state.trendingWeek,
        upComing: state.upComing,
        addToExploreList,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
