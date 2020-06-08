import ItemsActionTypes from './items.types';

export const getItemsStart = query => ({
  type: ItemsActionTypes.GET_ITEMS_START,
  payload: query
});

export const getItemsSuccess = ({ author, items, categories }) => ({
  type: ItemsActionTypes.GET_ITEMS_SUCCESS,
  payload: { author, items, categories }
});

export const getItemsFailure = error => ({
  type: ItemsActionTypes.GET_ITEMS_FAILURE,
  payload: error
});

export const getItemStart = id => ({
  type: ItemsActionTypes.GET_ITEM_START,
  payload: id
});

export const getItemSuccess = ( item ) => ({
  type: ItemsActionTypes.GET_ITEM_SUCCESS,
  payload:  item 
});

export const getItemFailure = error => ({
  type: ItemsActionTypes.GET_ITEM_FAILURE,
  payload: error
});