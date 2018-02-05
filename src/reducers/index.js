import { combineReducers } from 'redux';
import ActiveTab from './ReducerActiveTab';
import { categories, subCategories, criteria } from './backend_data';

const rootReducer = combineReducers({
  activeTab: ActiveTab,
  categories: categories,
  subCategories: subCategories,
  criteria: criteria
});

export default rootReducer;
