import ItemsActionTypes from "./items.types";

const INITIAL_STATE = {
  search: {
    categories: [],
    author: {},
    items: [],
    loaded: false
  },
  itemSelected: {
    author: {}, 
    item: {
      id: '',
      title: '',
      price: {
        currency: '',
        amount: 0,
        decimals: 0
      },
      picture: '',
      condition: '',
      free_shipping: false,
      location: ''

    },
    loaded: false
  },
  error: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ItemsActionTypes.GET_ITEMS_SUCCESS:
      const search = action.payload;
      search.loaded = true;
      return {
        ...state,
        search: search,
        error: null,
      };

    case ItemsActionTypes.GET_ITEMS_FAILURE:
      return {
        ...state,
        search: null,
        error: action.payload,
      };
      case ItemsActionTypes.GET_ITEM_SUCCESS:
        const itemSelected = action.payload;
        itemSelected.loaded = true;
        return {
          ...state,
          itemSelected: itemSelected,
          error: null,
        };
  
      case ItemsActionTypes.GET_ITEM_FAILURE:
        return {
          ...state,
          itemSelected: null,
          error: action.payload,
        };

    default:
      return state;
  }
};

export default userReducer;
