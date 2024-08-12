import React from "react";

export default function Header() {
  return (
    <div className="header">
      <img
        src="/troll-face.svg"
        alt="Troll Face Logo"
        className="header--logo"
      />
      <h1 className="header--title">Meme Generator</h1>
      <h3 className="header--subtitle">React Course - Project 3</h3>
    </div>
  );
}
