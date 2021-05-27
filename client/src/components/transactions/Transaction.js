import React from 'react';

const Transaction = ({ transaction }) => {

  const { input, outputMap } = transaction;

  const renderRecipients = () => {
    const recipients = Object.keys(outputMap);
    return recipients.map(recipient => {
      return (
        <div key={recipient}>
          <hr />
          <div><span style={{ marginRight: '5px' }}>Recipient:</span>{`${recipient.substring(0, 20)}...`}</div>
          <div><span style={{ marginRight: '5px' }}>Amount:</span> {outputMap[recipient]}</div>
        </div>
      );
    });
  };


  return (
    <div className="tile is-parent is-8">
      <article className="tile is-child box">
      <div className="block">
        <div className="subtitle is-4">Transaction Details</div>
      </div>
      <div className="subtitle is-5" style={{ margin: '15px 0px' }}>Sender:</div>
      <div><span style={{ marginRight: '5px' }}>Address:</span> {`${input.address.substring(0, 50)}...`}</div>
      <div><span style={{ marginRight: '5px' }}>Balance:</span>{input.amount}</div>
      <div className="subtitle is-5" style={{ margin: '15px 0px' }}>Recipients:</div>
      {renderRecipients()}
      </article>
    </div>
  );
};

export default Transaction;
