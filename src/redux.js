import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import * as reducers from './reducers';
import sagas from './sagas'

// history using the browser one
export const history = createHistory();

// creating saga middleware
const sagaMiddleware = createSagaMiddleware();

// store.js
export function configureStore(initialState = {}) {
  const middleware = [routerMiddleware(history), sagaMiddleware];
  const composeEnhancers = (window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
  const store = createStore(
    combineReducers({
      router: routerReducer,
      ...reducers,
    }), 
    initialState, 
    composeEnhancers(applyMiddleware(...middleware))
  );
  sagaMiddleware.run(sagas);

  return store;
};

export const store = configureStore();
