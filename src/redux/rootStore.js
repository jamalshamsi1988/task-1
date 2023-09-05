import {combineReducers } from "redux";
import listReducer from "./listReducer";



const rootReducer = combineReducers({
   listReducer : listReducer 
})

export default rootReducer;