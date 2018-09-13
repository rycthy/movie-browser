
const initialState = {
  query: '',
  mediaType: 'movie',
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
      };
    case 'SET_MEDIA_TYPE':
      return {
        ...state,
        mediaType: action.mediaType
      }
    default:
      return state;
  }
};
