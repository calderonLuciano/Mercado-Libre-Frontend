import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ItemService } from "../../services/itemService";
import BreadCrumb from "../../components/breadcrumb.component";
import CardContainer from "../../components/cardContainer.component";

const ItemsPage = (prevProps) => {
  const [author, setAuthor] = useState({ name: "", lastName: "" });
  const [categories, setCategories] = useState([]);
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("");

  let { search } = useLocation();
  const queryP = new URLSearchParams(search);
  const param = queryP.get("q");

  const fetchData = async () => {
    //setQuery(param);

    const itemService = new ItemService();
    itemService.searchItems(param).then((res) => {
      setAuthor(res.results.author);
      setItems(res.results.items);
      setCategories(res.results.categories);
    });
  };

  useEffect(() => {
    fetchData();
  }, [param]);

  return (
    <div className="container">
      <BreadCrumb categoriesP={categories}></BreadCrumb>
      <div className="container__cards">
        <CardContainer items={items}></CardContainer>
      </div>
    </div>
  );
};

export default ItemsPage;
