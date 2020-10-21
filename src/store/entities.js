import { combineReducers } from "redux";
import dogsReducer from "./dogs";

export default combineReducers({
  dogs: dogsReducer,
});
