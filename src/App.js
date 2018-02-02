import React, { Component } from 'react';
import CategoryList from './containers/CategoryList/CategoryList';
import CategoryDetail from './containers/CategoryDetail/CategoryDetail';

export default class App extends Component {
  render() {
    return (
      <div>
        <CategoryList />
        <CategoryDetail />
      </div>
    );
  }
}