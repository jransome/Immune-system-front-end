import { combineReducers } from 'redux';
import ActiveCategory from './ReducerActiveCategory';
import ActiveSubCategory from './ReducerActiveSubCategory';
import { categories, subCategories, criteria } from './backend_data';

const rootReducer = combineReducers({
  activeCategory: ActiveCategory,
  activeSubCategory: ActiveSubCategory,
  categories: categories,
  subCategories: subCategories,
  criteria: criteria
});

export default rootReducer;
