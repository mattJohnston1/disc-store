import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import discs from './discs';
import disc from './disc';
import bagState from './checkoutState';
import currentImage from './currentImage';
import bag from './bag';
import filteredDiscs from './filteredDiscs';
import checkoutInfo from './checkoutInfo';

const rootReducer = combineReducers({
  discs,
  disc,
  bagState,
  currentImage,
  bag,
  filteredDiscs,
  checkoutInfo,
})

const logger = require('redux-logger').default;
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(thunk, logger));

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
