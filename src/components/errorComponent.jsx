import React from "react";
import global from "../assets/images/error-conexion.jpg";
import empty from "../assets/images/empty-state.jpg";
import notFound from "../assets/images/not-found.jpg";
function ErrorComponent({ type, message }) {
  return (
    <div className="error__container">
      <h1 style={{ textAlign: "center" }}>{message}</h1>
      {console.log(type)}
      {type === "global" ? (
        <img className="error__container__img--404" src={global} alt="Error del servidor"></img>
      ) : type === "empty" ? (
        <img className="error__container__img--404" src={empty} alt="No hay resultados disponibles"></img>
      ) : (
        <img className="error__container__img--404" src={notFound} alt="Recurso solicitado no existente"></img>
      )}
    </div>
  );
}

export default ErrorComponent;
