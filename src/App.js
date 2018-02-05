import React, { Component } from 'react';
import CategoryList from './containers/CategoryList/CategoryList';
import SubCategoryList from './containers/SubCategoryList/SubCategoryList';
import Window from './containers/Window/Window';

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="nav-bar">
          <CategoryList />
          <SubCategoryList />
        </div>
        <Window />
      </div>
    );
  }
}