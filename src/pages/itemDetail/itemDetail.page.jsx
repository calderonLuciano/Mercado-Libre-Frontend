import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemService } from "../../services/itemService";
import BreadCrumb from "../../components/breadcrumb.component";
import CardContainer from "../../components/cardContainer.component";

const ItemDetailPage = () => {
  const { id } = useParams();
  const [author, setAuthor] = useState({ name: "", lastName: "" });
  const [item, setItem] = useState(null);

  const fetchData = async () => {
    const itemService = new ItemService();
    itemService.getItemDetail(id).then((res) => {
      setAuthor(res.results.author);
      setItem(res.results.item);
    });
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    
    <div className="container">
    <BreadCrumb></BreadCrumb>
    <div className="container__card__detail">
    <CardContainer width={85} item={item}></CardContainer>
  </div>
    </div>);
};

export default ItemDetailPage;
