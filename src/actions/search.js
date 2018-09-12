import { baseUrl } from "../utils/tmdbConfig";

export const setTrending = (imgPaths) => ({
  type: `SET_TRENDING`,
  imgPaths
});
export const startSetTrending = () => {
  return (dispatch) => {
    return fetch(baseUrl).then((res) => {
      res.json().then((data) => {
        const imgPaths = data.results.map((result) => result.poster_path);
        dispatch(setTrending(imgPaths));
      });
    });
  };
};