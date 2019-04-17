import React, { Component } from "react";

class App extends Component {
  state = {
    name: "Abdullah",
    students: [
      { name: "Mohammed", email: "mohammed@gmail.com" },
      { name: "Dashti", email: "dashti@gmail.com" },
      { name: "Basam", email: "basam@gmail.com" }
    ]
  };

  addNewStudent = () => {
    
    const newStudent = { 
      name: this.state.name,
      email: this.state.name + "@gmail.com"
    }

    this.setState({
      students: [
        ...this.state.students,
        newStudent
      ],
      name: ""
    });
  };

  render() {
    return (
      <ul>
        <input
          value={this.state.name}
          onChange={e =>
            this.setState({ name: e.target.value })
          }
        />
        <button onClick={this.addNewStudent}>
          Add
        </button>
        <div>The count of students is {0}</div>
        {this.state.students.map(x => (
          <li>
            {x.name.toUpperCase()}, {x.email}
          </li>
        ))}
      </ul>
    );
  }
}

export default App;
