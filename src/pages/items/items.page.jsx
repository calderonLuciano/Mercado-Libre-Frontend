import React from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import BreadCrumb from "../../components/breadcrumb.component";
import CardContainer from "../../components/cardContainer.component";
import ItemsActionTypes from "../../redux/items/items.types";
import UiActionTypes from "../../redux/ui/ui.types";
import { selectIsLoadedItemsSelector } from "../../redux/items/items.selectors";
import { selectGlobalErrorSelector } from "../../redux/items/items.selectors";
import Spinner from "../../components/spinner.component";
import ErrorComponent from "../../components/errorComponent";

const ItemsPage = () => {
  const dispatch = useDispatch();
  let { search } = useLocation();
  const queryP = new URLSearchParams(search);
  const param = queryP.get("q");
  dispatch({ type: ItemsActionTypes.CLEAN_ITEM_SELECTED });
  dispatch({ type: ItemsActionTypes.GET_ITEMS_START, payload: param });
  dispatch({ type: UiActionTypes.CHANGE_PAGE, payload: "items" });
  const isLoaded = useSelector(selectIsLoadedItemsSelector);
  const globalError = useSelector(selectGlobalErrorSelector);

  if (globalError) {
    return (
      <ErrorComponent
        type="global"
        message="Ups... el servidor no esta disponible"
      />
    );
  } else {
    if (isLoaded) {
      return (
        <div className="container">
          <BreadCrumb></BreadCrumb>
          <div className="container__cards">
            <CardContainer></CardContainer>
          </div>
        </div>
      );
    } else {
      return <Spinner></Spinner>;
    }
  }
};

export default ItemsPage;
