import UiActionTypes from "./ui.types";

export const changePage = (page) => ({
  type: UiActionTypes.CHANGE_PAGE,
  payload: page,
});

export const changeSearch = (text) => ({
  type: UiActionTypes.CHANGE_SEARCH,
  payload: text,
});

export const changeImageDetailLoaded = (value) => ({
  type: UiActionTypes.CHANGE_IMAGE_DETAIL_LOADED,
  payload: value,
});
