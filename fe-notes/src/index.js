import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import './styles/css/index.css';

import rootReducer from './stateTree/reducers';
import App from './components/App';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk, logger)));

const rootElement = document.getElementById('root');


ReactDOM.render(
<Provider store={store} >
    <App  />
</Provider>, 
rootElement);

// I modified the build command in package.json to redirect 404's to index.html
// Very hacky way to fix the routing problem
// Would recommend proper netlify redirect configuration for production projects
