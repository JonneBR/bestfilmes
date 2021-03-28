import react, { createContext, useEffect, useReducer } from 'react';


const initialState = {
    exploreList = [],
    topRated = [],
    trendingWeek = [],
    upComing = []
}

export const GlobalContext = createContext(initialState)


export const GlobalProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)
}