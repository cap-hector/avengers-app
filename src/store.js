import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './../reducers';

const initialState = {
    name: 'Test nombre',
    description: 'Quien es mi compa',
    image: 'url'
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducers, initialState, composeEnhancers(applyMiddleware(thunk)));


