import { combineReducers } from 'redux';
import ActiveTab from './ReducerActiveTab';
import { categories, subCategories, criteria } from './backend_data';
import TeamsReducer from './TeamReducer';

const rootReducer = combineReducers({
  activeTab: ActiveTab,
  categories: categories,
  subCategories: subCategories,
  criteria: criteria,
  teams: TeamsReducer
});

export default rootReducer;
