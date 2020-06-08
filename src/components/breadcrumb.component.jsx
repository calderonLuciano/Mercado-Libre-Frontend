import React, { useState, useEffect } from "react";

const BreadCrumb = ({ categoriesP }) => {
  
  let counter = 0;
  return (
    <div className="breadcrumb__container">
  {categoriesP ?  categoriesP.map(category => {
    counter ++;
    const categoriesLength = categoriesP.length;
    if(counter !== categoriesLength){
      
     return <span className="breadcrumb__item" key={category}>{category} > </span>
    }else{
     return <span className="breadcrumb__item" key={category}><span className="breadcrum__item-bold">{category}</span></span>
    }
     }) : <div className="breadcrumb__item">No hay categorias </div>}
  </div>);
};

export default BreadCrumb;
