import { combineReducers } from "redux";
import listProductReducer from './listProductReducer';
import listCartReducer from "./listCartReducer";

export const reducer = combineReducers({ listProductReducer, listCartReducer })