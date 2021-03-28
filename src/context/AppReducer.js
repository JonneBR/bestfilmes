export default (state, action) => {
  switch (action.type) {
    case 'ADD_TO_EXPLORE_LIST':
      return {
        exploreList: [action.payload],
      };
    default:
      return state;
  }
};
