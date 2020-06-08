import React from "react";
import Item from "./item.component";
import ItemDetail from "./itemDetail.component";

const CardContainer = ({ items, item }) => {
  return (
    <div className="card">
    {items ?  
      items.map((item) => {
      return <Item key={item.id} item={item}></Item>;
    })
    
    : <ItemDetail item={item}></ItemDetail>}
     
    </div>
  );
};

export default CardContainer;
