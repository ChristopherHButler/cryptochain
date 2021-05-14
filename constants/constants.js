
const DEFAULT_PORT = 3000;
const ROOT_NODE_ADDRESS = `http://localhost:${DEFAULT_PORT}`;

const CHANNELS = {
  TEST: 'test',
  BLOCKCHAIN: 'blockchain',
};

const MINE_RATE = 1000;
const INITIAL_DIFFICULTY = 3;

const GENESIS_DATA = {
  timestamp: 1,
  lastHash: '-----',
  hash: 'hash-one',
  difficulty: INITIAL_DIFFICULTY,
  nonce: 0,
  data: [],
};



module.exports = {
  DEFAULT_PORT,
  ROOT_NODE_ADDRESS,
  CHANNELS,

  MINE_RATE,
  INITIAL_DIFFICULTY,
  GENESIS_DATA,
};