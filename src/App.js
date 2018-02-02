import React, { Component } from 'react';
import CategoryList from './containers/CategoryList/CategoryList';
import SubCategoryList from './containers/SubCategoryList/SubCategoryList';

export default class App extends Component {
  render() {
    return (
      <div>
        <CategoryList />
        <SubCategoryList />
      </div>
    );
  }
}