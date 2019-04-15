import React, { Component } from "react";

class App extends Component
{
  students = [
    {name: 'Mohammed', email: 'mohammed@gmail.com'},
    {name: 'Frya', email: 'frya@gmail.com'},
    {name: 'Ramzan', email: 'ramazan@gmail.com'},
    {name: 'Janger', email: 'janger@gmail.com'},
    {name: 'Bassam', email: 'bassam@gmail.com'},
  ];

  render() {
    return (
      <ul>
        {
          this.students.map(s => <li> <b>{s.name}</b>: {s.email}</li>)
        }
      </ul>
    );
  }
}

export default App;
