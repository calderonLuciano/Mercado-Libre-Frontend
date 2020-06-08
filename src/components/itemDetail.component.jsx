import React from "react";

const ItemDetail = ({ item }) => {
  console.log(item);
  return (
    <div className="item__detail">
      <div className="item__detail__body">
          <img
            className="item__detail__image"
            src={item?.picture}
            alt="imagen detalle del producto"
          >
          </img>
        <div className="item__detail__description">
          <span className="item__detail__condition">{item?.condition === 'new' ? 'Nuevo' : 'Usado'} - {item?.sold_quantity} vendidos </span>
          <h1 className="item__detail__title">{item?.title}</h1>
          <span className="item__detail__price">$ {item?.price.amount} <span className="item__detail__price-decimals">00</span></span>

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
};

export default ItemDetail;
