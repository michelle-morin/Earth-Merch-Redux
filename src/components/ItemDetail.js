import React from 'react';
import PropTypes from 'prop-types';

function ItemDetail(props){
  const { item, onClickingDelete, onClickingEdit } = props;

  return (
    <React.Fragment>
      <h1>{item.name}</h1>
      <p>{item.description}</p>
      <p>{item.quantity}</p>
      <button onClick={ ()=> onClickingDelete(item.id)}>Remove Item</button>
      <button onClick={ ()=> onClickingEdit(item.id) }>Update Item Details</button>
    </React.Fragment>
  );
}

ItemDetail.propTypes = {
  item: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default ItemDetail;