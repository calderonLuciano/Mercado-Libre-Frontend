import { createSelector } from 'reselect';

const selectItems = state => state.application;

export const selectSearchSelector = createSelector(
  [selectItems],
  items => items.search
);  

export const selectGlobalErrorSelector = createSelector(
  [selectItems],
  items => items.error
);  

export const selectCategoriesSelector = createSelector(
  [selectSearchSelector],
  search => search.categories
);

export const selectErrorItemsSelector = createSelector(
  [selectSearchSelector],
  search => search.error
);

export const selectItemsSelector = createSelector(
  [selectSearchSelector],
  search => search.items
);

export const selectIsLoadedItemsSelector = createSelector(
  [selectSearchSelector],
  search => search.loaded
);

export const selectItemSelectedSelector = createSelector(
  [selectItems],
  selected => selected.itemSelected
);

export const selectItemSelector = createSelector(
  [selectItemSelectedSelector],
  selected => selected.item
);

export const selectIsLoadedItemSelector = createSelector(
  [selectItemSelectedSelector],
  selected => selected.loaded
);

export const selectAuthorSelector = createSelector(
  [selectSearchSelector],
  search => search.author
);