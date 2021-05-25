import React, { useState, useEffect } from 'react';
import axios from 'axios';
import uuid from 'uuid/v1';


import Block from './Block';


const Blockchain = () => {

  const [blocks, setBlocks] = useState([]);

  useEffect(() => {
    axios.get(`${document.location.origin}/api/v1/blockchain`)
         .then((res) => {
           setBlocks(res.data.data);
         })
         .catch((error) => {
           console.error('could not fetch blocks info: ', error.message);
         });
  }, []);

  const renderBlocks = () => blocks.map(block => <Block key={uuid()} block={block} />);

  return (
    <div>
      <h3>Blocks</h3>
      {renderBlocks()}
    </div>
  );
};


export default Blockchain;