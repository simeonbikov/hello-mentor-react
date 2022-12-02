import React from "react";

export default function Mentor(props) {
  //   console.log(props);
  return (
    <ul>
      {props.names.map((mentor, index) => (
        <li key={index}>{mentor}</li>
      ))}
    </ul>
  );
}
