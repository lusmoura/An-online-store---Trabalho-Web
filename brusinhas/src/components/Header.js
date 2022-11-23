import React from "react";
import logo from "../assets/logo.svg";
import brusinhas from "../assets/brusinhas.svg";
import cart from "../assets/cart_icon.svg";
import profile from "../assets/profile_icon.svg";
import HeaderButton from "./HeaderButton";

export default function Header() {
  return (
    <div className="header">
      <div className="header-container">
        <div className="header-left">
          <img src={logo} alt="logo" />
          <img src={brusinhas} alt="brusinhas" />
          <HeaderButton label="Todas" />
          <HeaderButton label="Camiseta" />
          <HeaderButton label="Regata" />
          <HeaderButton label="Linha Básica" />
          <HeaderButton label="Estilosah" />
        </div>
        <div className="header-right">
          <img src={cart} alt="cart" />
          <img src={profile} alt="profile" />
        </div>
      </div>
    </div>
  );
}
