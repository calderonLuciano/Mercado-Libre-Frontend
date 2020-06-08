import React from "react";
import { useParams } from "react-router-dom";
import BreadCrumb from "../../components/breadcrumb.component";
import CardContainer from "../../components/cardContainer.component";
import {useDispatch, useSelector} from 'react-redux';
import ItemsActionTypes from '../../redux/items/items.types';
import UiActionTypes from '../../redux/ui/ui.types';
import { selectIsLoadedItemSelector } from "../../redux/items/items.selectors";
import Spinner from "../../components/spinner.component";

const ItemDetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  dispatch({type: ItemsActionTypes.GET_ITEM_START, payload: id});
  dispatch({type: UiActionTypes.CHANGE_PAGE, payload: 'detail'});
  const isLoaded = useSelector(selectIsLoadedItemSelector);

  if(isLoaded){
    return (
      <div className="container">
      <BreadCrumb></BreadCrumb>
      <div className="container__card__detail">
      <CardContainer></CardContainer>
    </div>
      </div>);
  } else {
    return <Spinner></Spinner>
  }
  
};

export default ItemDetailPage;
