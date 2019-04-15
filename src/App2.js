import React from 'react';

export const App2 = () => {
  return (
    <div>
      <ul>
        {["Frya", "Dashti"].map(s => (
          <li>Hello {s}</li>
        ))}
      </ul>
    </div>
  );
};