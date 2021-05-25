import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import appReducer from '../app/appReducer';

import { STATE_KEYS } from '../../constants';

const rootReducer = (history) => combineReducers({
  [STATE_KEYS.ROUTER]: connectRouter(history),
  [STATE_KEYS.APP]: appReducer,
});

export default rootReducer;