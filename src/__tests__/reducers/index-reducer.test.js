import rootReducer from '../../reducers/index';
import { createStore } from 'redux';
import formVisibleReducer from '../../reducers/form-visible-reducer';
import itemListReducer from '../../reducers/item-list-reducer';
import editingVisibleReducer from '../../reducers/editing-visible-reducer';

let store = createStore(rootReducer);

describe("rootReducer", () => {
  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      masterItemList: {},
      formVisibleOnPage: false,
      editing: false
    });
  });

  test('that initial state of itemListReducer mathes root reducer', ()=> {
    expect(store.getState().masterItemList).toEqual(itemListReducer(undefined, { type: null }));
  });

  test('that initial state of formVisibleReducer mathes root reducer', ()=> {
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, { type: null }));
  });

  test('that initial state of editingVisibleReducer', ()=> {
    expect(store.getState().editing).toEqual(editingVisibleReducer(undefined, { type: null }));
  });

  test('check that itemListReducer matches root reducer', ()=> {
    const action = {
      type: 'ADD_ITEM',
      name: 't-shirt',
      description: 'hemp',
      quantity: 5,
      id: 1
    }
    store.dispatch(action);
    expect(store.getState().masterItemList).toEqual(itemListReducer(undefined, action));
  });

  test('check that formVisibleReducer matches root reducer', ()=> {
    const action = {
      type: 'TOGGLE_FORM'
    }
    store.dispatch(action);
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, action));
  });

  test('check that editingVisibleReducer matches root reducer', () => {
    const action = {
      type: 'TOGGLE_EDIT'
    }
    store.dispatch(action);
    expect(store.getState().editing).toEqual(editingVisibleReducer(undefined, action));
  });
});