import React, { Component } from "react";

export default ({ displayKey = "name", children = null, data = [] }) => {
  return (
    <div>
      {children}
      <ul>
        {data.map(s => (
          <li>{s[displayKey]}</li>
        ))}
      </ul>
    </div>
  );
};
