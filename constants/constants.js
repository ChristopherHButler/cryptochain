
const DEFAULT_PORT = 3000;
const ROOT_NODE_ADDRESS = `http://localhost:${DEFAULT_PORT}`;
const REDIS_DEV_URL = 'redis://127.0.0.1:6379';
const REDIS_PROD_URL = 'redis://:pbedbb2f4c484744725ab0cc068347b97d8f041771723b9b0ab90a2a0b7aaa38f@ec2-34-253-218-71.eu-west-1.compute.amazonaws.com:22240';

const CHANNELS = {
  TEST: 'test',
  BLOCKCHAIN: 'blockchain',
  TRANSACTION: 'transaction',
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

const STARTING_BALANCE = 1000;

const REWARD_INPUT = {
  address: '*authorized-reward*',
};

const MINING_REWARD = 50;


module.exports = {
  DEFAULT_PORT,
  ROOT_NODE_ADDRESS,
  REDIS_DEV_URL,
  REDIS_PROD_URL,
  CHANNELS,

  MINE_RATE,
  INITIAL_DIFFICULTY,
  GENESIS_DATA,

  STARTING_BALANCE,

  REWARD_INPUT,
  MINING_REWARD,
};