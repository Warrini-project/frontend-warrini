import { combineReducers } from "redux";
import auth from "./auth";
import filterReducer from "../filter/filterSlice";

export default combineReducers({
    auth,
    filter: filterReducer,
});