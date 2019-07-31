import React from "react";
import "./style.css";

function Navbar(props) {
  return <div className="navbar">
      <nav>
      <ul>
      <ul className="brand">Clicky Game</ul>
      <ul>{props.status}</ul>
      <ul>Score: {props.score} | Top Score: {props.topScore}</ul>

  </ul>
      </nav>
  </div>
}

export default Navbar;
