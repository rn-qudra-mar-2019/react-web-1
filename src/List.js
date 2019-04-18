import React, { Component } from "react";

export default ({displayKey = 'name', data = []}) => {

  return (
    <ul>
      {data.map(s => (
        <li>{s[displayKey]}</li>
      ))}
    </ul>
  );
};
