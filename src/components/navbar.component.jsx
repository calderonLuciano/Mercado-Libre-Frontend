import React from "react";
import logo from "../assets/images/logo-search.png";
import SearchInput from "./searchInput.component";
import { useHistory } from "react-router-dom";
import UiActionTypes from "../redux/ui/ui.types";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch({ type: UiActionTypes.CHANGE_SEARCH, payload: "" });
    history.push("/");
  };
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <img
          onClick={handleClick}
          className="navbar__img"
          src={logo}
          alt="Logo de Mercado Libre"
        />
        <SearchInput />
      </div>
    </nav>
  );
};

export default Navbar;
