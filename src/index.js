import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Category from './components/Category/Category';
import registerServiceWorker from './registerServiceWorker';

const criteriaDescriptions = [
    'Product team has a visible, digital dashboard',
    'All Live Code is using tech listed as adopted or decommissioned in the Technology Radar unless it is an approved trial', 
    'blah'
];

const subNames = [
    'SLO',
    'Principles', 
    'Tech Radar'
];

ReactDOM.render(
    <Category categoryName="Customer" subNames={subNames} criteriaDescriptions={criteriaDescriptions} />, document.getElementById('root')
);
registerServiceWorker();
