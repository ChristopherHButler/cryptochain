import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import "regenerator-runtime/runtime";

import 'bulmaswatch/darkly/bulmaswatch.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import store, { persistor } from './store/config';

import App from './components/App';

import './styles/index.css';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('app')
);