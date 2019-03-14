import React from 'react';
import ReactDOM from 'react-dom';
// import logger from 'redux-logger';
// import logger from 'use-reducer-logger';

import './styles/css/index.css';

import StoreProvider from './stateTree/Store';

import App from './components/App';




ReactDOM.render(
<StoreProvider>
    <App />
</StoreProvider>, 
document.getElementById('root'));

