import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import 'baseSetting/baseStyle';
import App from 'containers/App';
import reducer from 'reducers';
//import storage from './domain/storage';

//storage.read() ? { todo: storage.read() } :

const store = createStore(
  reducer,
  {},
  process.env.NODE_ENV === 'production' ? undefined : composeWithDevTools()
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
