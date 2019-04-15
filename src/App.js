import React, { Component } from "react";

class App extends Component {

  updateSomething() {

    this.setState({
      count: this.state.count + 1,

      students: [
        { name: "Ramazan", email: "ramazan@gmail.com" },
        ...this.state.students,
      ]
    }, () => {
      console.log('After update', this.state.count)
    });

    this.setState({
      count: this.state.count + 1
    }, () => {
      
      console.log('After update 2', this.state.count)
    })

    this.setState({
      count: this.state.count + 1
    }, () => {
      console.log('After update 3', this.state.count)
    })

    this.setState({
      count: this.state.count + 1
    }, () => {
      
      console.log('After update 4', this.state.count)
    })

    console.log('Next line')
  }

  state = {
    students: [
      { name: "Mohammed", email: "mohammed@gmail.com" },
      { name: "Frya", email: "frya@gmail.com" },
      { name: "Janger", email: "janger@gmail.com" },
      { name: "Bassam", email: "bassam@gmail.com" }
    ],
    count: 0
  };

  render() {
    console.log('rendering')

    return (
      <ul>
        <button onClick={this.updateSomething.bind(this)}>Update it {this.state.count}</button>
        <div>
        {this.state.count}
        </div>
        {this.state.students.map(s => (
          <li>
            {" "}
            <b>{s.name}</b>: {s.email}
          </li>
        ))}
      </ul>
    );
  }
}

export default App;
