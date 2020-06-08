import { createSelector } from 'reselect';

const selectUi = state => state.ui;

export const selectActualPage = createSelector(
  [selectUi],
  ui => ui.page
);  

export const selectSearchText = createSelector(
  [selectUi],
  ui => ui.search
);  
