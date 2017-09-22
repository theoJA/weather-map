import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise' // this will be a middleware

import './index.css';
import App from './App';
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
// apply the ReduxPromise (a middleware) into the application by putting it into the 
//  applyMiddleWare parentheses

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>, 
  document.getElementById('root'));
registerServiceWorker();
