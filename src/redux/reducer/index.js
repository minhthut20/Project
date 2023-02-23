import user from "./user";
import post from "./post";
import comment from "./comment";
import { combineReducers } from "redux";

const rootReducer = combineReducers({user,post,comment})

export default rootReducer

