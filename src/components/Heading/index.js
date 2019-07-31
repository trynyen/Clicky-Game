import React from "react";
import "./style.css";

function Heading(props) {
  return <h1 className="title">{props.children}</h1>;
}

export default Heading;
