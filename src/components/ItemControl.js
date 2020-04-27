import React from 'react';
import NewItemForm from './NewItemForm.js';
import ItemList from './ItemList.js';
import ItemDetail from './ItemDetail';
import EditItemForm from './EditItemForm';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function ItemControl(props) {

  const handleClick = () => {
    if (props.selectedItem !== null) {   
      const { dispatch } = props;
      const action = {
        type: 'CHANGE_TO_NULL'
      }   
      dispatch(action);
    } else {
      const { dispatch } = props;
      const action = {
        type: 'TOGGLE_FORM'
      }
      dispatch(action);
    }
  }

  const handleEditClick = () => {
    console.log("handleEditClick reached!");
    const { dispatch } = props;
    const action = {
      type: 'TOGGLE_EDIT'
    }
    dispatch(action);
  }

  const handleEditingItemInList = (itemToEdit) => {
    const { dispatch } = props;
    const { name, description, quantity, id } = itemToEdit;
    const action = {
      type: 'ADD_ITEM',
      id: id,
      name: name,
      description: description,
      quantity: quantity
    }
    dispatch(action);
    const actionTwo = {
      type: 'TOGGLE_EDIT'
    }
    dispatch(actionTwo);
    const actionThree = {
      type: 'CHANGE_TO_NULL'
    }
    dispatch(actionThree);
  }

  const handleItemPurchase = (id) => {
    const { dispatch } = props;
    const currentlySelectedItem = Object.values(props.masterItemList).filter(item => item.id === id)[0];
    const action = {
      type: 'ADD_ITEM',
      id: id,
      quantity: currentlySelectedItem.quantity - 1,
      name: currentlySelectedItem.name,
      description: currentlySelectedItem.description
    }
    dispatch(action);
  }

  const handleItemRestock = (id) => {
    const { dispatch } = props;
    const currentlySelectedItem = Object.values(props.masterItemList).filter(item => item.id === id)[0];
    const action = {
      type: 'ADD_ITEM',
      id: id,
      name: currentlySelectedItem.name,
      description: currentlySelectedItem.description,
      quantity: parseInt(currentlySelectedItem.quantity) + 10
    }
    dispatch(action);
  }

  const handleDeletingItem = (id) => {
    const { dispatch } = props;
    const action = {
      type: 'DELETE_ITEM',
      id: id
    }
    dispatch(action);
    const actionTwo = {
      type: 'CHANGE_TO_NULL'
    }
    dispatch(actionTwo);
  }

  const handleChangingSelectedItem = (id) => {
    const selectedItem = props.masterItemList[id];
    const { dispatch } = props;
    const action = {
      type: 'CHANGE_SELECTED',
      name: selectedItem.name,
      id: selectedItem.id,
      description: selectedItem.description,
      quantity: selectedItem.quantity
    }
    dispatch(action);
  }

  const handleAddingNewItemToList = (newItem) => {
    const { dispatch } = props;
    const { id, name, description, quantity } = newItem;
    const action = {
      type: 'ADD_ITEM',
      id: id,
      name: name,
      description: description,
      quantity: quantity
    }
    dispatch(action);
    const actionTwo = {
      type: 'TOGGLE_FORM'
    }
    dispatch(actionTwo);
  }

  const itemControlStyles = {
    position: 'relative',
    top: '30vh',
    margin: '2%',
    overflowY: 'auto'
  }

  let currentlyVisibleState = null;
  let buttonText = null;
  console.log(props.editing);
  if (props.editing) {
    console.log("in editing render");
    currentlyVisibleState = <EditItemForm 
      item = {props.selectedItem}
      onEditItem = {handleEditingItemInList} />
    buttonText = "return to items";
  } else if (props.selectedItem != null) {
    currentlyVisibleState = <ItemDetail 
      item = {props.selectedItem} 
      onClickingDelete = {handleDeletingItem}
      onClickingEdit = {handleEditClick} />
    buttonText = "return to items";
  } else if (props.formVisibleOnPage) {
    currentlyVisibleState = <NewItemForm 
      onNewItemCreation={handleAddingNewItemToList}/>
    buttonText = "return to items";
  } else {
    currentlyVisibleState = <ItemList 
      itemList={props.masterItemList} 
      onItemSelection={handleChangingSelectedItem}
      onClickingBuy={handleItemPurchase}
      onClickingRestock={handleItemRestock} />
    buttonText = "+";
  }

  return (
    <React.Fragment>
      <div style={itemControlStyles}>
        <div className="adjustableButton">
          <button onClick={handleClick}>{buttonText}</button>
        </div>
        <div className="storeFront">
          {currentlyVisibleState}
        </div>
      </div>
    </React.Fragment>
  );
}

ItemControl.propTypes = {
  masterItemList: PropTypes.object
}

const mapStateToProps = state => {
  return {
    masterItemList: state.masterItemList,
    formVisibleOnPage: state.formVisibleOnPage,
    editing: state.editing,
    selectedItem: state.selectedItem
  }
}

ItemControl = connect(mapStateToProps)(ItemControl);

export default ItemControl;