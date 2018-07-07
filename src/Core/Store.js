import { applyMiddleware, compose, createStore } from 'redux';

import thunk from 'redux-thunk';
import logger from 'redux-logger';

import reducers from '../Reducers';

const middleware = [thunk];
if (process.env.NODE_ENV !== 'production') {
    middleware.push(logger);
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const Store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(...middleware)
    )
);

export default Store;