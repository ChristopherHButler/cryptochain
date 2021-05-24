import React, { useState, useEffect } from 'react';

import Wallet from './Wallet';
import Blocks from './Blocks';


const App = () => {

  return (
    <div>
      <h1>Welcome to Cryptochain</h1>
      <Wallet />
      <Blocks />
    </div>
  )
}


export default App;
