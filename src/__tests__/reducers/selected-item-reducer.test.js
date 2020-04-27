import selectedItemReducer from '../../reducers/selected-item-reducer';

describe('selectedItemReducer', () => {
  let action;
  const selectedItem = {
      name: 't-shirt',
      description: '100% hemp',
      quantity: 5,
      id: 1 
    };

  test('Should return default state if no action type is recognized', () => {
    expect(selectedItemReducer(null, { type: null })).toEqual(null);
  });
  
  test('Should successfully set selectedItem to the item passed to the reducer', () => {
    action = {
      type: 'CHANGE_SELECTED',
      name: 't-shirt',
      description: '100% hemp',
      quantity: 5,
      id: 1 
    };
    expect(selectedItemReducer(null, action)).toEqual(selectedItem);
  });
});