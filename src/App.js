import React, { Component } from 'react';
import CategoryList from './containers/CategoryList/CategoryList';
import SubCategoryList from './containers/SubCategoryList/SubCategoryList';
import CriteriaWindow from './containers/CriteriaWindow/CriteriaWindow';

export default class App extends Component {
  render() {
    return (
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
      </div>
    );
  }
}