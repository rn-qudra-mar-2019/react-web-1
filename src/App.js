import React, { Component } from "react";

const style = {
  btn: {
    backgroundColor: 'blue',
    borderStyle: 'solid',
    borderRadius: '.5rem',
    padding: '.5rem',
    color: '#fff'
  }
}

class App extends Component {
  state = {
    studentName: "",
    students: []
  };

  addStudent = () => {
    if (this.state.studentName === "") return;

    this.setState({
      students: [...this.state.students, { name: this.state.studentName }],
      studentName: ""
    });
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
          <button onClick={this.addStudent} disabled={!this.state.studentName}>Add Student</button>
        </div>
        <ul>
          {this.state.students.map(s => (
            <li>{s.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
