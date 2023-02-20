import React from "react";

const Square = (props) => {
  return <div className={"square"}>{props.X ? "X" : props.O ? "O" : ""}</div>;
};

export default Square;
