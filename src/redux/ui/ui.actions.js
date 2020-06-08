import UiActionTypes from './ui.types';


export const changePage = ( page ) => ({
  type: UiActionTypes.CHANGE_PAGE,
  payload:  page 
});

export const changeSearch = ( text ) => ({
  type: UiActionTypes.CHANGE_SEARCH,
  payload: text 
});
