import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Rick and Morty</h1>
      <div><a href="/location">Локации</a></div>
      <div><a href="/location">Эпизоды</a></div>
    </nav>
  );
};

export default Navbar;
