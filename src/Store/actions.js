import axios from "axios";

export const FETCH_POST_DATA = "FETCH_POST_DATA";
export const FETCH_POST_DATA_LOADING = "FETCH_POST_DATA_LOADING";
export const FETCH_POST_ERROR = "FETCH_POST_ERROR";
export const SET_CURRENTPAGE = "SET_CURRENTPAGE";

export const fetchdata = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_POST_DATA_LOADING });
    setTimeout(() => {
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
          dispatch({ type: FETCH_POST_DATA, payload: response.data });
        })
        .catch((err) => {
          dispatch({ type: FETCH_POST_ERROR, payload: err });
        });
    }, 500);
  };
};
