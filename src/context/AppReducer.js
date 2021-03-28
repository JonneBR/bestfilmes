export default (state, action) => {
  switch (action.type) {
    case 'ADD_TO_EXPLORE_LIST':
      return {
        //breaks down array with ...
        exploreList: [...action.payload],
      };
    default:
      return state;
  }
};
