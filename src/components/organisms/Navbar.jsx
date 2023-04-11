import React from "react";

export default function Navbar() {
  return (
    <header>
      <nav className="flex">
        <div className="flex nav__logo">
          <img src="./images/icons/logo.png"></img>
          <h2>Gaming</h2>
        </div>
        <img className="icon" src="./images/icons/hamburguer.png"></img>
      </nav>
    </header>
  );
}
