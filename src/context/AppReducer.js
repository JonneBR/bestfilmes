export default (state, action) => {
  switch (action.type) {
    case 'ADD_TO_EXPLORE_LIST':
      return {
        //breaks down array with ...
        //must spread to de state of the arrays doest return as undefined
        ...state,
        exploreList: [...action.payload],
      };
    case 'ADD_TO_TOP_RATED_LIST':
      return {
        ...state,
        topRated: [...action.payload],
      };
    case 'ADD_TO_POPULAR_LIST':
      return {
        ...state,
        popularMovies: [...action.payload],
      };
    default:
      return state;
  }
};
