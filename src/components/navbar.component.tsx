import React from "react";
import logo from "../assets/images/logo-search.png";
import SearchInput from "./searchInput.component";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <img src={logo} alt="Logo de Mercado Libre" />
        <SearchInput />
      </div>
    </nav>
  );
};

export default Navbar;
