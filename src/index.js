import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Criteria from './components/Criteria/Criteria';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Criteria description="Test Criteria" />, document.getElementById('root'));
registerServiceWorker();
