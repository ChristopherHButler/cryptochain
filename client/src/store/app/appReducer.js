/* eslint-disable indent */
import { handleActions } from 'redux-actions';

import * as actions from '../root/rootActions';


export const defaultState = {
  version: null,
};

export default handleActions({

  [actions.setVersion]: (state, { payload: { version } }) => ({
    ...state,
    version,
  }),
  [actions.clearVersion]: state => ({
    ...state,
    version: null,
  }),

}, defaultState);
