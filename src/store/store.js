import { compose, applyMiddleware } from "redux";
import { createStore } from "redux";

import logger from "redux-logger";

import { rootReducer } from "./root-reducer";

// ----------------------------------------------------------------
const middleWares = [logger];
const composedEnhancers = applyMiddleware(...middleWares);

export const store = createStore(rootReducer, composedEnhancers);
