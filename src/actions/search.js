import { baseUrl } from "../utils/tmdbConfig";

export const setTrending = (imgPaths) => ({
  type: `SET_TRENDING`,
  imgPaths
});
export const startSetTrending = () => {
  return (dispatch, getState) => {
    fetch(baseUrl).then((res) => {
      res.json().then((data) => {
        console.log(data.results);
        const imgPaths = data.results.map((result) => result.poster_path);
        console.log(imgPaths);
        dispatch(setTrending(imgPaths));
      });
    });
  };
};