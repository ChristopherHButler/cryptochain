const express = require('express');
const request = require('request');
const colors = require('colors');

const { DEFAULT_PORT, ROOT_NODE_ADDRESS } = require('./constants/constants');

const app = express();

const Blockchain = require('./blockchain/blockchain');
const PubSub = require('./network/pubsub');

const blockchain = new Blockchain();
const pubsub = new PubSub({ blockchain });

module.exports = {
  blockchain: blockchain,
  pubsub: pubsub,
};

setTimeout(() => pubsub.broadcastChain(), 1000);


// use body parser
app.use(express.json());

// route handlers
app.use('/api/v1', require('./routes/v1/apiRouter'));

// sync chains
const syncChains = () => {
  console.log(`syncing blockchain`.cyan);
  request({ url: `${ROOT_NODE_ADDRESS}/api/v1/blocks`}, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      const rootChain = JSON.parse(body);

      console.log(`replacing chain with new root chain: ${JSON.stringify(rootChain)}`.cyan);
      blockchain.replaceChain(rootChain);
    }
  });
};


let PEER_PORT;

if (process.env.GENERATE_PEER_PORT === 'true') {
  PEER_PORT = DEFAULT_PORT + Math.ceil(Math.random() * 1000);
}

const PORT = PEER_PORT || DEFAULT_PORT;

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`.yellow.cyan);

  if (PORT !== DEFAULT_PORT) {
    syncChains();
  }
});

