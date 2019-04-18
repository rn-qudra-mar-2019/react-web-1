import React, { Component } from "react";

export default class AddHeader extends Component {
  state = {
    studentName: '',
  }

  addItem = () => {
    this.props.onAddItem(this.state.studentName);
    this.setState({
      studentName: ''
    })
  }

  render() {
    return (
      <>
        <input
          value={this.state.studentName}
          onKeyPress={e => e.which === 13 && this.addItem()}
          onChange={e =>
            this.setState({
              studentName: e.target.value
            })
          }
        />
        <button onClick={this.addItem} disabled={!this.state.studentName}>
          Add Student
        </button>
      </>
    );
  }
}

AddHeader.defaultProps = {
  onAddItem: () => {}
}