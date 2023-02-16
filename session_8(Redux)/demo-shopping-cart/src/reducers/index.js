import { combineReducers } from "redux";
import listProductReducer from './listProductReducer';
import listCartReducer from "./listCartReducer";
import notifyReducer from "./notifyReducer";

export const reducer = combineReducers({ listProductReducer, listCartReducer, notifyReducer });