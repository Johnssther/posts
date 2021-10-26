
import { createStore,applyMiddleware } from "redux";
// import { createLogger } from 'redux-logger';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

// Middleware: Redux Persist Config
const persistConfig = {
  key: 'root',
  storage,
  blacklist: [],
};

// const logger = createLogger();

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, applyMiddleware(thunk));
let persistor = persistStore(store);
// persistor.purge();

export {store, persistor};
