import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import Home from '../components/layout/Home';
import Wallet from '../components/wallet/Wallet';
import Blockchain from '../components/blockchain/Blockchain';
import TransactionPool from '../components/transactions/TransactionPool';

import { ROUTES } from '../constants';

export const Routes = () => {
  return (
    <Switch>
      <Route exact path={ROUTES.HOME} component={withRouter(Home)} />
      <Route exact path={ROUTES.BLOCKCHAIN} component={withRouter(Blockchain)} />
      <Route exact path={ROUTES.TRANSACTIONS} component={withRouter(TransactionPool)} />
      <Route exact path={ROUTES.WALLET} component={withRouter(Wallet)} />
    </Switch>
  );
};