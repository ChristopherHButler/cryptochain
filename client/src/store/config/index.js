import {
  applyMiddleware,
  compose,
  createStore,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import rootSaga from '../root/rootSaga';
import rootReducer from '../root/rootReducer';



// persistence config
const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2,
  whitelist: [
    // STATE_KEYS.APP,
  ],
};

// Create and export the history object
export const history = createBrowserHistory();

const reactRouterMiddleware = routerMiddleware(history);
const sagaMiddleware = createSagaMiddleware();

const middlewares = [];

// during development: enforce immutability and provide extended support for redux debugging tools.
let composeEnhancers = compose;

if (process.env.NODE_ENV === 'development') {
  middlewares.push(reduxImmutableStateInvariant());
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || composeEnhancers;
}

middlewares.push(sagaMiddleware, reactRouterMiddleware);

// create the redux store
const initialState = undefined;

const store = createStore(
  persistReducer(persistConfig, rootReducer(history)),
  initialState,
  composeEnhancers(applyMiddleware(...middlewares)),
);

// hot module replacement config
if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('../root/rootReducer', () => {
    const nextReducer = require('../root/rootReducer').default; // eslint-disable-line global-require
    store.replaceReducer(persistReducer(persistConfig, nextReducer(history)));
  });
}

// run the saga middleware
sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
export default store;
