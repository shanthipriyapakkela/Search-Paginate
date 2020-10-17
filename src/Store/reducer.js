import {
  FETCH_POST_DATA,
  FETCH_POST_DATA_LOADING,
  FETCH_POST_ERROR,
  SET_CURRENTPAGE,
} from "./actions";

const initialState = {
  ServerPostsData: [],
  loading: false,
  error: false,
  perPage: 9,
  currentPage: 1,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POST_DATA_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case FETCH_POST_ERROR: {
      return {
        ...state,
        error: true,
        loading: false,
      };
    }
    case FETCH_POST_DATA:
      return {
        ...state,
        ServerPostsData: action.payload,
        loading: false,
        error: false,
        perPage: 9,
        currentPage: 1,
      };
    case SET_CURRENTPAGE: {
      return {
        ...state,
        currentPage: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
