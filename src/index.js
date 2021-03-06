import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.js';
import * as serviceWorker from './serviceWorker';
import store from './store/store';
import { Provider } from 'react-redux';
import { ApolloProvider } from '@apollo/react-hooks';

import client  from './connect'





ReactDOM.render(

  <Provider store={store}>
  <ApolloProvider client={client} >
        <App />
  </ApolloProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
