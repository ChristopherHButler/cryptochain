import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Wallet = () => {

  const [walletInfo, setWalletInfo] = useState({});

  useEffect(() => {
    axios.get('http://localhost:3000/api/v1/walletInformation')
         .then((res) => {
           setWalletInfo(res.data.data);
         })
         .catch((error) => {
           console.error('could not fetch wallet info: ', error.message);
         });
  }, []);

  const { address, balance } = walletInfo;

  return (
    <div>
      <h3>Wallet</h3>
      <div>Address: {address}</div>
      <div>Balance: {balance}</div>
    </div>
  )
}


export default Wallet;
