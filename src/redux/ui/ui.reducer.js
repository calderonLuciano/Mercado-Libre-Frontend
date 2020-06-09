import UiActionTypes from "./ui.types";

const INITIAL_STATE = {
  search: "",
  page: "",
  imageDetailLoaded: false,
};

const uiReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UiActionTypes.CHANGE_SEARCH:
      return {
        ...state,
        search: action.payload,
      };

    case UiActionTypes.CHANGE_PAGE:
      return {
        ...state,
        page: action.payload,
      };

    case UiActionTypes.CHANGE_IMAGE_DETAIL_LOADED:
      return {
        ...state,
        imageDetailLoaded: action.payload,
      };

    default:
      return state;
  }
};

export default uiReducer;
