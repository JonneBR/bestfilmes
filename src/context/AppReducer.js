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
    case 'ADD_TO_UP_COMING_LIST':
      return {
        ...state,
        upComingMovies: [...action.payload],
      };
    case 'ADD_MOVIE_TO_MYLIST':
      return {
        ...state,
        mylistMovies: [action.payload, ...state.mylistMovies],
      };
    case 'REMOVE_MOVIE_FROM_MYLIST':
      return {
        ...state,
        mylistMovies: state.mylistMovies.filter(
          (movie) => movie.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};
