import { createStore , applyMiddleware } from "redux";
import rootReducer from './rootStore';

const store = createStore(rootReducer , applyMiddleware());

export default store;