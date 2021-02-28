import { combineReducers } from "redux";

const moviesArray = [];

function moviesReducer(state = moviesArray, action) {
  switch (action.type) {
    case "SET_APIDATA":
      return action.data;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  moviesReducer,
});

export default rootReducer;
