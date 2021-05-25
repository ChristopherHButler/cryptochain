import React, { Fragment } from 'react';
import { ConnectedRouter } from 'connected-react-router';

import Header from './layout/Header';

import { Routes } from '../navigation/routes';
import { history } from '../store/config';



const App = () => {

  return (
    <ConnectedRouter history={history}>
      <Fragment>
        <Header />
        <div className="App">
          <Routes />
        </div>
      </Fragment>
    </ConnectedRouter>
  )
}


export default App;
