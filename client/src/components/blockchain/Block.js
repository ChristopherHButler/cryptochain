import React, { useState } from 'react';
import moment from 'moment';

import Transaction from '../transactions/Transaction';


const Block = ({ block }) => {

  const [showDetails, setShowDetails] = useState(false);

  const renderTransactions = () => {
    const transactions = block.data;

    return transactions.map(transaction => {
      return (
        <div key={transaction.id}>
          <hr />
          <Transaction transaction={transaction} />
        </div>
      );
    });
  };

  const renderData = () => {
    const stringifiedData = JSON.stringify(block.data);

    return stringifiedData.length > 35 ? `${stringifiedData.substring(0, 35)}...` : stringifiedData;
  };

  return (
    <div style={{ border: '1px solid white', margin: '5px 0px', padding: '5%' }}>
      Block Info:
      <div>Data: {!showDetails && renderData()}</div>
      <div>Difficulty: {block.difficulty}</div>
      <div>Hash: {block.hash}</div>
      <div>Last Hash: {block.lastHash}</div>
      <div>Nonce: {block.nonce}</div>
      <div>Timestamp: {moment(block.timestamp).format('MMM DD, YYYY')}</div>
      <button style={{ marginTop: '15px' }} onClick={() => setShowDetails(!showDetails)}>{showDetails ? 'Hide ' : 'Show '} Transactions</button>
      { showDetails && 
        (
          <div>
            <div>Transactions:</div>
            {renderTransactions()}
          </div>
        )
      }
    </div>
  );
};

export default Block;
