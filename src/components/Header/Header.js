import React from "react";
import "./Header.css";
import "../App/App.css";
import logoImage from "../../images/Poké_Ball_icon.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header app__section">
      <div className="header__container">
        <img src={logoImage} alt="Pokeball-Logo" className="header__logo" />
        <p className="header__logo-name">React Pokedex</p>
      </div>
      <div className="header__links">
        <Link to="/">Pokedex</Link>
        <Link to="/about">About</Link>
      </div>
    </header>
  );
}

export default Header;
