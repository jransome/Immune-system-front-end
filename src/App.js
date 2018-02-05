import React, { Component } from 'react';
import CategoryList from './containers/CategoryList/CategoryList';
import SubCategoryList from './containers/SubCategoryList/SubCategoryList';
import Window from './containers/Window/Window';

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="left">
          <div className="nav-bar">
            <CategoryList />
            <SubCategoryList />
          </div>
        </div>
        <div className="right">
          <Window />
        </div>
      </div>
    );
  }
}