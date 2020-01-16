const filterReducer = (prevState = 'All', action) => {
  switch (action.type) {
    case 'CHANGE_FILTER':
      return action.filter;
    default:
      return prevState;
  }
};

export default filterReducer;
