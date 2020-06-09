import React from "react";
import { useSelector } from "react-redux";
import { selectCategoriesSelector } from "../redux/items/items.selectors";

const BreadCrumb = () => {
  const categories = useSelector(selectCategoriesSelector);
  let counter = 0;
  return (
    <div className="breadcrumb__container">
      {categories ? (
        categories.map((category) => {
          counter++;
          const categoriesLength = categories.length;
          if (counter !== categoriesLength) {
            return (
              <span className="breadcrumb__item" key={category}>
                {category} >{" "}
              </span>
            );
          } else {
            return (
              <span className="breadcrumb__item" key={category}>
                <span className="breadcrum__item-bold">{category}</span>
              </span>
            );
          }
        })
      ) : (
        <div className="breadcrumb__item">No hay categorias </div>
      )}
    </div>
  );
};

export default BreadCrumb;
