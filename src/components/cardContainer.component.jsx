import React from "react";
import Item from "./item.component";
import ItemDetail from "./itemDetail.component";
import {useSelector} from 'react-redux';
import {selectItemsSelector} from '../redux/items/items.selectors';
import {selectActualPage} from '../redux/ui/ui.selectors';

const CardContainer = () => {
  const items = useSelector(selectItemsSelector);
  
  const actualPage = useSelector(selectActualPage);
  return (
    <div className="card">
    {actualPage === 'items' ?  
      items.map((itemP) => {
      return <Item key={itemP.id} item={itemP}></Item>;
    })
    
    : <ItemDetail></ItemDetail>}
     
    </div>
  );
};

export default CardContainer;
