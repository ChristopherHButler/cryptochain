import React from 'react';

const Transaction = ({ transaction }) => {

  const { input, outputMap } = transaction;

  const renderRecipients = () => {
    const recipients = Object.keys(outputMap);
    return recipients.map(recipient => {
      return (
        <div key={recipient}>
          To: {`${recipient.substring(0, 20)}...`} | Sent: {outputMap[recipient]}
        </div>
      );
    });
  };


  return (
    <div>
      <div>From: {`${input.address.substring(0, 20)}...`} | Balance: {input.amount}</div>
      {renderRecipients()}
    </div>
  );
};

export default Transaction;
