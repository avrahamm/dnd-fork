import {createStore, combineReducers, compose} from 'redux';

import rows from './reducers/rows';

const reducer = combineReducers({rows});
let preloadedState = {};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,
    preloadedState,
    composeEnhancers( )
);

export default store;

