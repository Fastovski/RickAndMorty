import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Rick and Morty</h1>
      <div className="navbar-links">
      <a href="/">Персонажи</a>
        <a href="/location">Локации</a>
      </div>
    </nav>
  );
};

export default Navbar;
