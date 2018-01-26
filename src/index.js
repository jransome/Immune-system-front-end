import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BACKEND_DATA } from './Constants'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <App data={BACKEND_DATA} />, document.getElementById('root')
);
registerServiceWorker();