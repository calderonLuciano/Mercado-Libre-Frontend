import React from "react";
import logo from "../assets/images/logo-spin.png";
function Spinner() {
  return (
    <div className="container container--spinner">
      <img
        className="img__loading rotating"
        src={logo}
        alt="cargando mercadoLibre"
      ></img>
      <h2 className="spinner__text">Cargando...</h2>
    </div>
  );
}

export default Spinner;
