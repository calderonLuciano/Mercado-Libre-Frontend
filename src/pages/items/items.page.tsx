import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ItemService } from '../../services/itemService'
import BreadCrumb from "../../components/breadcrumb.component";
import CardContainer from "../../components/cardContainer.component";
import {Item} from '../../models/item.model'

const ItemsPage = () => {
  const item: Item[] = [];
  const [author, setAuthor] = useState({name: '', lastName: ''});
  const [categories, setCategories] = useState([]);
  const [items, setItems] = useState(item);
  const [query, setQuery] = useState('');

  let { search } = useLocation();
  const queryP = new URLSearchParams(search);
  useEffect(() => {
    
    const param = queryP.get("q");
    if (param !== null) {
      setQuery(param);
    }
    
    const itemService = new ItemService();
    if (param !== null) {
      itemService.searchItems(param)
        .then(res => {
          setAuthor( res.results.author );
          setItems( res.results.items );
          setCategories( res.results.categories );
        })
    }
    
  }, [])


  return (
    <div className="container">
      <BreadCrumb></BreadCrumb>
      <div className="container__cards">
      <CardContainer ></CardContainer>
      </div>
      
    </div>
  );
};

export default ItemsPage;
