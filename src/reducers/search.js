
const initialState = {
  imgPaths: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TRENDING':
      return { imgPaths: action.imgPaths };
    default:
      return state;
  }
};
