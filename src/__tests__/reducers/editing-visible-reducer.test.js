import editingVisibleReducer from '../../reducers/editing-visible-reducer';

describe('editingVisibleReducer', ()=> {
  test('Should return default state if no action type is recognized', () => {
    expect(editingVisibleReducer(false, { type: null })).toEqual(false);
  });

  test('Should toggle editing state to true', () => {
    expect(editingVisibleReducer(false, { type: 'TOGGLE_EDIT' })).toEqual(true);
  });
});