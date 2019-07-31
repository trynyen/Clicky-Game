import React from "react";
import "./style.css";

function Navbar(props) {
  return <div>
      <nav>
      <ul>
      <li className="brand">Clicky Game</li>
      <li>{props.alert}</li>
      <li>Score: {props.score} | Top Score: {props.topScore}</li>

  </ul>
      </nav>
  </div>
}

export default Navbar;
