import React from "react";
import "./style.css";

function Heading(props) {
  return <div className="title">{props.children}</div>;
}

export default Heading;
