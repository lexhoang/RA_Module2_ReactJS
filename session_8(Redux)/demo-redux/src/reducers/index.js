import { combineReducers } from "redux";
import countReducer from './countReducer';
import listReducer from './listReducer';

export const reducer = combineReducers({ countReducer, listReducer })