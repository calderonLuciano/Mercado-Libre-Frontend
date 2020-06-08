import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectItemSelector } from "../redux/items/items.selectors";
import { selectImageLoadedSelector } from "../redux/ui/ui.selectors";
import  UiActionTypes  from "../redux/ui/ui.types";

const ItemDetail = () => {
  const item = useSelector(selectItemSelector);
  const imageLoaded = useSelector(selectImageLoadedSelector);
  const dispatch = useDispatch()

  const changeImageLoaded = (value) => {
    dispatch({type: UiActionTypes.CHANGE_IMAGE_DETAIL_LOADED, payload: value})
  }

  const agregateDot = (price) => {
    const intPrice = parseInt(price);
    const numberWithComma = new Intl.NumberFormat("en-US").format(intPrice);
    const numberWithCommaString = numberWithComma.toString();
    const numberWithDotString = numberWithCommaString.replace(',', '.');
    return numberWithDotString;
  }
  
  const calculateDecimals = () => {
    const priceS = item.price.amount.toString();
    const priceSplit = priceS.split(".");
    const price = agregateDot(priceSplit[0])
    if (priceSplit?.length > 1) {
      return (
        <div className="item__detail__price">
          <span>$ {price}</span> 
          <span className="item__detail__price-decimals">{priceSplit[1]}</span>
        </div>
      );
    } else {
      return (
        <div className="item__detail__price">
         <span>$ {price}</span> 
          <span className="item__detail__price-decimals">00</span>
        </div>
      );
    }
  };
  if (item) {
    return (
      <div className="item__detail">
        <div className="item__detail__body">
          
            <img
                className={`item__detail__image img-${ imageLoaded ? "visible" : "hidden"}`}
                src={item.picture}
                alt="imagen detalle del producto"
                onLoad={() => changeImageLoaded(true)}
              />  
              
         

          <div className="item__detail__description">
            <span className="item__detail__condition">
              {item.condition === "new" ? "Nuevo" : "Usado"} -{" "}
              {item.sold_quantity} vendidos{" "}
            </span>
            <h1 className="item__detail__title">{item.title}</h1>
            {calculateDecimals()}

            <button aria-label="comprar" className="item__detail__button">Comprar</button>
            {}
          </div>
        </div>

        <div className="item__detail__footer">
          <h1 className="item__detail__title">Descripción del producto</h1>
          <div dangerouslySetInnerHTML={{ __html: item?.description }} />
        </div>
      </div>
    );
  } else {
    return (
      <div style={{ textAlign: "center" }}>No se encontraron resultados</div>
    );
  }
};

export default ItemDetail;
