import React from "react";
import UiActionTypes from "../../redux/ui/ui.types";
import ItemsActionTypes from "../../redux/items/items.types";
import { useDispatch } from "react-redux";

const SearchPage = () => {
  const dispatch = useDispatch();
  dispatch({ type: UiActionTypes.CHANGE_PAGE, payload: "search" });
  dispatch({ type: ItemsActionTypes.CLEAN_ALL });
  return <></>;
};

export default SearchPage;
