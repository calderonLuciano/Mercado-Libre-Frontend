import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ItemService } from '../../services/itemService'
import { Item } from "../../models/item.model";

const ItemsPage = () => {
  const [author, setAuthor] = useState({name: '', lastName: ''});
  const [categories, setCategories] = useState([]);
  const [items, setItems] = useState([]);

  let { search } = useLocation();
  const query = new URLSearchParams(search);
  useEffect(() => {
    
    const param = query.get("q");
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
    <>
      <li>Author: {author.name}</li>
      {items.map((res: Item) => {
        return (
          <li key={res.id}>{res.title}</li>
        )
      })}
    </>);
};

export default ItemsPage;
