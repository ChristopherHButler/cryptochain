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
    <div className="tile is-parent is-8">
      <article className="tile is-child box">
      <div style={{ margin: '5px 0px' }}>
        <div className="subtitle is-4">Block Info:</div>
        {/* <div>
          <span className="subtitle is-5" style={{ marginRight: '5px' }}>Block Data:</span>
          <span>{!showDetails && renderData()}</span>
        </div> */}
        <div>
          <span className="subtitle is-5" style={{ marginRight: '5px' }}>Difficulty:</span>
          <span>{block.difficulty}</span>
        </div>
        <div>
          <span className="subtitle is-5" style={{ marginRight: '5px' }}>Hash:</span>
          <span>{block.hash.length > 60 ? `${block.hash.substring(0, 60)}...` : block.hash}</span>
        </div>
        <div>
          <span className="subtitle is-5" style={{ marginRight: '5px' }}>Last Hash:</span>
          <span>{block.lastHash.length > 56 ? `${block.lastHash.substring(0, 56)}...` : block.lastHash}</span>
        </div>
        <div>
          <span className="subtitle is-5" style={{ marginRight: '5px' }}>Nonce:</span>
          <span>{block.nonce}</span>
        </div>
        <div>
          <span className="subtitle is-5" style={{ marginRight: '5px' }}>Timestamp:</span>
          <span>{moment(block.timestamp).format('MMM DD, YYYY')}</span>
        </div>
        <button className="button" style={{ margin: '15px 0px' }} onClick={() => setShowDetails(!showDetails)}>{showDetails ? 'Hide ' : 'Show '} Transactions</button>
        { showDetails && 
          (
            <div>
              <div>Transactions:</div>
              {renderTransactions()}
            </div>
          )
        }
      </div>
      </article>
    </div>
  );
};

export default Block;
