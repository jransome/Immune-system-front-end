import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Category from './components/Category/Category';
import registerServiceWorker from './registerServiceWorker';

// const criteriaDescriptions = [
//     'Product team has a visible, digital dashboard',
//     'All Live Code is using tech listed as adopted or decommissioned in the Technology Radar unless it is an approved trial', 
//     'blah'
// ];

// const subNames = [
//     'SLO',
//     'Principles', 
//     'Tech Radar'
// ];

const BACKEND_DATA = [
    {
        CategoryName: "Category 1",
        SubCategories: [       
            {
                SubName: "Cat 1, sub category 1",
                Criteria: [
                    { 
                        description: 'Cat 1, subcat 1, criteria 1',
                        status: 0,
                    },
                    { 
                        description: 'Cat 1, subcat 1, criteria 2',
                        status: 0,
                    },
                ] 
            },
            {
                SubName: "Cat 1, sub category 2",
                Criteria: [
                    { 
                        description: 'Cat 1, subcat 2, criteria 1',
                        status: 0,
                    },
                    { 
                        description: 'Cat 1, subcat 2, criteria 2',
                        status: 0,
                    },
                ] 
            }
        ]
    },
    {
        CategoryName: "Category 2",        
        SubCategories: [       
            {
                SubName: "Cat 2, sub category 1",
                Criteria: [
                    { 
                        description: 'Cat 2, subcat 1, criteria 1',
                        status: 0,
                    },
                    { 
                        description: 'Cat 2, subcat 1, criteria 2',
                        status: 0,
                    },
                ] 
            },
            {
                SubName: "Cat 2, sub category 2",
                Criteria: [
                    { 
                        description: 'Cat 2, subcat 2, criteria 1',
                        status: 0,
                    },
                    { 
                        description: 'Cat 2, subcat 2, criteria 2',
                        status: 0,
                    },
                ] 
            }
        ]
    },
]

ReactDOM.render(
    <App data={BACKEND_DATA} />, document.getElementById('root')
    // <Category categoryName="Customer" subNames={subNames} criteriaDescriptions={criteriaDescriptions} />, document.getElementById('root')
);
registerServiceWorker();