import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CategoryArea from './components/CategoryArea/CategoryArea';
import registerServiceWorker from './registerServiceWorker';

const criteriaDescriptions = [
    "Product team has a visible, digital dashboard",
    'All Live Code is using tech listed as adopted or decommissioned in the Technology Radar unless it is an approved trial', 
    'blah'
];

ReactDOM.render(
    <CategoryArea criteriaDescriptions={criteriaDescriptions} />, document.getElementById('root')
);
registerServiceWorker();
