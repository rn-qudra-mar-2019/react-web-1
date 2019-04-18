import React, { Component } from "react";
import List from "./List";

const style = {
  btn: {
    backgroundColor: "blue",
    borderStyle: "solid",
    borderRadius: ".5rem",
    padding: ".5rem",
    color: "#fff"
  }
};

class App extends Component {
  state = {
    studentName: "",
    students: []
  };

  addStudent = () => {
    if (this.state.studentName === "") return;

    this.setState({
      students: [
        ...this.state.students,
        {
          name: this.state.studentName,
          email: this.state.studentName + "@gmail"
        }
      ],
      studentName: ""
    });
  };

  showInfoAboutEvent = e => {
    console.log(e);
  };

  render() {
    return (
      <div>
        <div>
          <input
            value={this.state.studentName}
            onKeyPress={e => e.which === 13 && this.addStudent()}
            onChange={e =>
              this.setState({
                studentName: e.target.value
              })
            }
          />
          <button onClick={this.addStudent} disabled={!this.state.studentName}>
            Add Student
          </button>
        </div>
        <h1>Student names</h1>
        <List data={this.state.students} />

        <h1>Students Emails</h1>
        <List displayKey="email" data={this.state.students} />
      </div>
    );
  }
}

export default App;
