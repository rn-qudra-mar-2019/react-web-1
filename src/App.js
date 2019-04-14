import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

const App2 = () => (
  <div>
    <ul>
      {["Frya", "Dashti"].map(s => (
        <li>Hello {s}</li>
      ))}
    </ul>
  </div>
);

class App extends Component {
  
  render2() {
    return <div>I am render 2</div>
  }

  render() {
    let students = ["Frya", "Dashti"];

    return <div>
      <ul>
        {
          students.map(s => <li>Hello, {s}</li>)
        }
      </ul>
    </div>;
  }
}

export default App;
