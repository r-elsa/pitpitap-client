import React from "react";
import bugsnag from "@bugsnag/js";
import bugsnagReact from "@bugsnag/plugin-react";
import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./store/reducers";
import {
  ApiMiddleware,
  LocalstorageMiddleware,
  ProcessLoginMiddleware
} from "./store/middleware";

const composeEnhancers =
  process.env.NODE_ENV === "production" ? compose : composeWithDevTools;
const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(
      ApiMiddleware,
      LocalstorageMiddleware,
      ProcessLoginMiddleware
    )
  )
);

const bugsnagClient = bugsnag(process.env.REACT_APP_BUGS_SNAG_KEY);
bugsnagClient.use(bugsnagReact, React);
const ErrorBoundary = bugsnagClient.getPlugin("react");

export { ErrorBoundary, store };
