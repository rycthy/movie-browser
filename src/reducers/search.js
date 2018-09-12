
const initialState = {
  query: '',
  media: 'movie',
  results: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_RESULTS':
      return { 
        ...state,
        results: action.results
      };
    case 'SET_QUERY':
      return {
        ...state,
        query: action.query
      }
    default:
      return state;
  }
};
