import React, { Component, useState } from "react";
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

  constructor() {
    super();

    console.log('Constructor')
  }

  state = {
    students: [],
    todos: [],
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

  componentDidMount() {
    console.log('Did mount')

    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => {
        this.setState({
          todos: json.slice(0, 10)
        })
      })
  }

  componentDidUpdate() {
    console.log('Did update')
  }

  shouldComponentUpdate() {
    return true;
  }

  deleteTodo = todoId => {
    this.setState({
      todos: this.state.todos.filter(t => t.id !== todoId)
    })
  }

  render() {
    console.log('Render')

    return (
      <div>
        <div>
          <AddHeader onAddItem={this.addStudent}>
            <h1>Add Student</h1>
            <h5>Write student name in textbox</h5>   
          </AddHeader>
        </div>
        <List data={this.state.students}>
          <h1>Student names</h1>
        </List>

        <List displayKey="email" data={this.state.students}>
          <h1>Student Emails</h1>
        </List>

          <h1>Todos</h1>
          {this.state.todos.length === 0 && 'No todo left'}
          <ul>
            {
              this.state.todos.map(t => {
                return <li>{t.title} <button onClick={() => this.deleteTodo(t.id)}>Delete</button></li>
              })
            }
          </ul>
      </div>
    );
  }
}

export default App;
