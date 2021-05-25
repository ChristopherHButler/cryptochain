import { STATE_KEYS } from '../../constants';

export const getRouterState = state => state[STATE_KEYS.ROUTER];
export const getRouterLocation = state => getRouterState(state).location;

export const getAppState = state => state[STATE_KEYS.APP];


export const getAppVersion = state => getAppState(state).version;
