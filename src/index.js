import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CategoryArea from './components/CategoryArea/CategoryArea';
import registerServiceWorker from './registerServiceWorker';

const criteriaDescriptions = ["hello", 'hi', 'blah'];

ReactDOM.render(
    <CategoryArea criteriaDescriptions={criteriaDescriptions} />, document.getElementById('root')
);
registerServiceWorker();
