import React, { useState, useEffect } from 'react';
import axios from 'axios';

import TransactionForm from '../transactions/TransactionForm';


const Wallet = () => {

  const [walletInfo, setWalletInfo] = useState({});

  useEffect(() => {
    axios.get(`${document.location.origin}/api/v1/walletInformation`)
         .then((res) => {
           setWalletInfo(res.data.data);
         })
         .catch((error) => {
           console.error('could not fetch wallet info: ', error.message);
         });
  }, []);

  const { address, balance } = walletInfo;

  const renderWalletDetails = () => {
    return (
      <>
        <div className="block" style={{ marginTop: '1.5em' }}>
          <h3 className="subtitle is-3">Your Wallet Details</h3>
        </div>
        <div className="block">
          <div className="subtitle is-4">Address:</div>
          <span>{address}</span>
        </div>
        <div className="block">
          <div className="subtitle is-4">Balance:</div>
          <span>{balance}</span>
        </div>
      </>
    );
  };

  const renderTransactionForm = () => {
    return (
      <>
        <div className="block" style={{ marginTop: '1.5em' }}>
          <h3 className="subtitle is-3">Make a Transaction</h3>
        </div>
        <div className="block">
          <TransactionForm />
        </div>
      </>
    );
  };

  return (
    <div className="columns is-centered">
      <div className="column is-half">
        <div className="block" style={{ marginTop: '1.5em' }}>
          <h3 className="title is-3">Wallet</h3>
        </div>
        {renderWalletDetails()}
        <hr />
        {renderTransactionForm()}
      </div>
    </div>
  )
}


export default Wallet;
