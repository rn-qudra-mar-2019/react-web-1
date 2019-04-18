import React, { Component } from "react";
import List from "./List";
import AddHeader from "./AddHeader"

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
    students: []
  };

  addStudent = (name) => {
    if (name === "") return;

    this.setState({
      students: [
        ...this.state.students,
        {
          name: name,
          email: name + "@gmail"
        }
      ],
    });
  };

  showInfoAboutEvent = e => {
    console.log(e);
  };

  render() {
    return (
      <div>
        <div>
          <AddHeader onAddItem={this.addStudent}/>
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
