import React from "react";
import { useHistory } from "react-router-dom";
import imageShipping from "../assets/images/ic_shipping.png";

const Item = ({ item }) => {
  const history = useHistory();

  const handleItemClick = (id) => {
    history.push(`/items/${id}`);
  };

  const agregateDot = () => {
    const numberWithComma = new Intl.NumberFormat("en-US").format(
      item.price.amount
    );
    const numberWithCommaString = numberWithComma.toString();
    const numberWithDotString = numberWithCommaString.replace(",", ".");
    item.price.amount = numberWithDotString;
  };

  return (
    <div className="container__item" onClick={() => handleItemClick(item.id)}>
      <img className="item__image" src={item.picture} alt="imagen"></img>
      <div className="container__item__texts">
        <div className="container__items__texts__header">
          <div className="item__price">
            {agregateDot()}$ {item.price.amount}
            {item.free_shipping ? (
              <img
                className="item__img__shipping"
                src={imageShipping}
                alt="free shipping"
              ></img>
            ) : (
              <> </>
            )}
          </div>
          <span className="item__location">{item.location}</span>
        </div>
        <p>{item.title}</p>
        <p>Completo Único!</p>
      </div>
      <br />
    </div>
  );
};

export default Item;
