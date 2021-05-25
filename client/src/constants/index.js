
export const STATE_KEYS = {
  ROUTER: 'router',
  APP: 'app',
  AUTH: 'auth',
  BLOCKCHAIN: 'blockchain',
  TRANSACTIONS: 'transactions',
  WALLET: 'wallet',
};

export const ROUTES = {
  HOME: '/',
  BLOCKCHAIN: '/blockchain',
  TRANSACTIONS: '/transactions',
  WALLET: '/wallet',
};

export const POLL_TRANSACTION_POOL_MAP_INTERVAL = 10000;

export default {
  STATE_KEYS,
  ROUTES,
  POLL_TRANSACTION_POOL_MAP_INTERVAL,
};