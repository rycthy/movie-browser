import { trendingUrl, searchUrl, apiKey } from "../utils/tmdbConfig";

export const setResults = (results) => ({
  type: `SET_RESULTS`,
  results
});
export const startSetTrending = () => {
  return (dispatch) => {
    return fetch(trendingUrl).then((res) => {
      res.json().then((data) => {
        const results = data.results.map((result) => result);
        dispatch(setResults(results));
      });
    });
  };
};
export const setQuery = (query) => ({
  type: 'SET_QUERY',
  query
});
export const startSetQueryResults = () => {
  return (dispatch, getState) => {
    const query = getState().search.query;
    const mediaType = getState().search.mediaType;
    return fetch(`${searchUrl}${mediaType}${apiKey}&query=${query ? query : "\"\""}&include_adult=false`).then((res) => {
      res.json().then((data) => {
        const results = data.results.map((result) => result);
        dispatch(setResults(results));
      });
    });
  }
}
export const setMediaType = (mediaType) => ({
  type: 'SET_MEDIA_TYPE',
  mediaType
});
