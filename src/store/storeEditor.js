import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import Reducers from "../reducers/index";
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
  Reducers,
  composeWithDevTools(applyMiddleware(thunk, logger))
);
export default store;
