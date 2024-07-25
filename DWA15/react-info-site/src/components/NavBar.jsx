import React from "react";
import reactLogo from "../assets/react.svg";

function NavBar() {
  return (
    <nav className="navbar">
      <img src={reactLogo} alt="logo" className="navbar--logo" />
      <h1 className="navbar--title">ReactFacts</h1>
      <h3>React Course - Project 1</h3>
    </nav>
  );
}

export default NavBar;
