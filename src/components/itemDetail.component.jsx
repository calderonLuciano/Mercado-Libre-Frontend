import React from "react";
import { useSelector } from "react-redux";
import { selectItemSelector } from "../redux/items/items.selectors";

const ItemDetail = () => {
  const item = useSelector(selectItemSelector);
  const calculateDecimals = () => {
    const priceS = item.price.amount.toString();
    const priceSplit = priceS.split(".");
    if (priceSplit?.length > 1) {
      return (
        <div className="item__detail__price">
        $ {priceSplit[0]}
        <span className="item__detail__price-decimals">
          {priceSplit[1]}
        </span>
        </div>
        
      );
    } else {
      return (
        <div className="item__detail__price">
        $ {priceSplit[0]}
        <span className="item__detail__price-decimals">
          00
        </span>
        </div>
      );
    }
  };
  if (item) {
    return (
      <div className="item__detail">
        <div className="item__detail__body">
          <img
            className="item__detail__image"
            src={item.picture}
            alt="imagen detalle del producto"
          ></img>
          <div className="item__detail__description">
            <span className="item__detail__condition">
              {item.condition === "new" ? "Nuevo" : "Usado"} -{" "}
              {item.sold_quantity} vendidos{" "}
            </span>
            <h1 className="item__detail__title">{item.title}</h1>
            {calculateDecimals()}

            <button className="item__detail__button">Comprar</button>
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
