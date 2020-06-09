import React from "react";
import { useParams } from "react-router-dom";
import BreadCrumb from "../../components/breadcrumb.component";
import CardContainer from "../../components/cardContainer.component";
import { useDispatch, useSelector } from "react-redux";
import ItemsActionTypes from "../../redux/items/items.types";
import UiActionTypes from "../../redux/ui/ui.types";
import { selectIsLoadedItemSelector } from "../../redux/items/items.selectors";
import Spinner from "../../components/spinner.component";
import {
  selectGlobalErrorSelector,
  selectErrorItemSelector,
} from "../../redux/items/items.selectors";
import ErrorComponent from "../../components/errorComponent";

const ItemDetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const isLoaded = useSelector(selectIsLoadedItemSelector);
  const globalError = useSelector(selectGlobalErrorSelector);
  const itemError = useSelector(selectErrorItemSelector);

  if (globalError) {
    return (
      <ErrorComponent
        type="global"
        message="Ups... el servidor no esta disponible"
      />
    );
  }

  if (itemError) {
    return (
      <ErrorComponent type="404" message="El item solicitado no es válido" />
    );
  }

  if (id) {
    dispatch({ type: ItemsActionTypes.GET_ITEM_START, payload: id });
    dispatch({ type: UiActionTypes.CHANGE_PAGE, payload: "detail" });
    if (isLoaded) {
      return (
        <div className="container">
          <BreadCrumb></BreadCrumb>
          <div className="container__card__detail">
            <CardContainer></CardContainer>
          </div>
        </div>
      );
    } else {
      return <Spinner></Spinner>;
    }
  } else return <div> No se encontraron resultados </div>;
};

export default ItemDetailPage;
