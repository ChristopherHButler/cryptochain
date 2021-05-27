import React, { useState, useEffect } from 'react';
import axios from 'axios';
import uuid from 'uuid/v1';

import Transaction from './Transaction';
import { POLL_TRANSACTION_POOL_MAP_INTERVAL } from '../../constants';


const TransactionPool = () => {

  const [transactionPoolMap, setTransactionPoolMap] = useState({});

  const fetchTransactionPool = async () => {
    try {
      const res = await axios.get(`${document.location.origin}/api/v1/transactionPoolMap`);
      // console.log('res: ', res);
      setTransactionPoolMap(res.data.data);
    } catch (error) {
      console.error('could not fetch transaction pool map info: ', error.message);
    }
  };

  useEffect(() => {
    fetchTransactionPool();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      fetchTransactionPool();
    }, POLL_TRANSACTION_POOL_MAP_INTERVAL);
    return () => clearInterval(interval);
  }, []);

  const renderTransactions = () => {
    return Object.values(transactionPoolMap).map(transaction => {
      return (
        <div key={transaction.id}>
          <Transaction transaction={transaction} />
        </div>
      );
    });
  };

  return (
    <div className="columns is-centered">
    <div className="column is-half">
      <div className="block" style={{ marginTop: '1.5em' }}>
        <h3 className="title is-3">Transaction Pool Map</h3>
      </div>
      {renderTransactions()}
    </div>
  </div>
  );
};

export default TransactionPool;
