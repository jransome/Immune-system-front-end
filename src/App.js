import React, { Component } from 'react';
import CategoryList from './containers/CategoryList/CategoryList';
import SubCategoryList from './containers/SubCategoryList/SubCategoryList';
import CriteriaWindow from './containers/CriteriaWindow/CriteriaWindow';
import TeamLogin from './containers/TeamLogin/TeamLogin';

const App = () => (
    <div id="app-container">
        <div className="left">
            <div className="nav-bar">
                <CategoryList />
                <SubCategoryList />
            </div>
        </div>
        <div className="right">
            <CriteriaWindow />
        </div>
        <TeamLogin />
    </div>
)

export default App;
