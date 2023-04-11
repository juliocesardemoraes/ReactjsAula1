import React from "react";

export default function Label(props) {
  console.log(props.name);
  return <div className="labels">{props.name}</div>;
}
