import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import bugsnag from '@bugsnag/js'
import bugsnagReact from '@bugsnag/plugin-react'

import './assets/styles/index.scss';
import { ApiMiddleware, LocalstorageMiddleware, ProcessLoginMiddleware } from './store/middleware';
import App from './containers/App';

import rootReducer from './store/reducers';

const bugsnagClient = bugsnag(process.env.REACT_APP_BUGS_SNAG_KEY);
bugsnagClient.use(bugsnagReact, React);
const ErrorBoundary = bugsnagClient.getPlugin('react')

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(
    ApiMiddleware,
    LocalstorageMiddleware,
    ProcessLoginMiddleware
  ))
);


ReactDOM.render(<Provider store={store}><ErrorBoundary><App /></ErrorBoundary></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
