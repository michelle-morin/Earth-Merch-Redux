import formVisibleReducer from './form-visible-reducer';
import itemListReducer from './item-list-reducer';
import editingVisibleReducer from './editing-visible-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  masterItemList: itemListReducer,
  editing: editingVisibleReducer
});

export default rootReducer;