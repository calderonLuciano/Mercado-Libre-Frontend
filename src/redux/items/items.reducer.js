import ItemsActionTypes from "./items.types";

const INITIAL_STATE = {
  search: {
    categories: [],
    author: {},
    items: [],
    loaded: false,
    error: ""
  },
  itemSelected: {
    author: {},
    item: {
      id: "",
      title: "",
      price: {
        currency: "",
        amount: 0,
        decimals: 0,
      },
      picture: "",
      condition: "",
      free_shipping: false,
      location: "",
    },
    loaded: false,
    error: ""
  },
  error: "",
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ItemsActionTypes.GET_ITEMS_SUCCESS:
      const search = action.payload;
      search.loaded = true;
      return {
        ...state,
        search: search,
        error: "",
      };

    case ItemsActionTypes.GET_ITEMS_FAILURE:
      return {
        ...state,
        search: {
          categories: [],
          author: {},
          items: [],
          loaded: true,
          error: action.payload,
        },
      };

      case ItemsActionTypes.GET_ITEMS_GLOBAL_FAILURE:
        return {
          ...state,
          search: {
            categories: [],
            author: {},
            items: [],
            loaded: true,
            error: "",
          },
          error: action.payload
        };
    case ItemsActionTypes.GET_ITEM_SUCCESS:
      const itemSelected = action.payload;
      itemSelected.loaded = true;
      return {
        ...state,
        itemSelected: itemSelected,
        error: "",
      };

    case ItemsActionTypes.GET_ITEM_FAILURE:
      return {
        ...state,
        itemSelected: {
          author: {},
          item: {
            id: "",
            title: "",
            price: {
              currency: "",
              amount: 0,
              decimals: 0,
            },
            picture: "",
            condition: "",
            free_shipping: false,
            location: "",
          },
          loaded: true,
          error: action.payload
        },
      };

    case ItemsActionTypes.CLEAN_ITEM_SELECTED:
      return {
        ...state,
        itemSelected: {
          author: {},
          item: {
            id: "",
            title: "",
            price: {
              currency: "",
              amount: 0,
              decimals: 0,
            },
            picture: "",
            condition: "",
            free_shipping: false,
            location: "",
          },
          loaded: false,
        },
      };
    case ItemsActionTypes.CLEAN_ALL:
      return {
        ...state,
        search: {
          categories: [],
          author: {},
          items: [],
          loaded: false,
        },
        itemSelected: {
          author: {},
          item: {
            id: "",
            title: "",
            price: {
              currency: "",
              amount: 0,
              decimals: 0,
            },
            picture: "",
            condition: "",
            free_shipping: false,
            location: "",
          },
          loaded: false,
        },
        error: "",
      };
    default:
      return state;
  }
};

export default userReducer;
