import React, { useState, useEffect } from 'react';
import axios from 'axios';
import uuid from 'uuid/v1';


import Block from './Block';


const Blocks = () => {

  const [blocks, setBlocks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/v1/blocks')
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


export default Blocks;