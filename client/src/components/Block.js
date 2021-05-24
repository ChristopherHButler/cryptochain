import React from 'react';
import moment from 'moment';



const Block = ({ block }) => {

  const renderData = () => {
    return `${JSON.stringify(block.data)}`;
  };

  return (
    <div>
      Block Info:
      <div>data: {renderData()}</div>
      <div>difficulty: {block.difficulty}</div>
      <div>hash: {block.hash}</div>
      <div>lastHash: {block.lastHash}</div>
      <div>nonce: {block.nonce}</div>
      <div>timestamp: {moment(block.timestamp).format('MMM DD, YYYY')}</div>
    </div>
  );
};

export default Block;
