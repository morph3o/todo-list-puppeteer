import React, { Component } from "react";
import { render } from "react-dom";

import TodoList from "./TodoList";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class App extends Component {
  constructor() {
    super();

    this.state = {
      todos: [
        { id: 1, title: "Work on story 1", status: true },
        { id: 2, title: "Work on story 2", status: true },
        { id: 3, title: "Work on story 3", status: false },
        { id: 4, title: "Work on story 4", status: true }
      ]
    };

    this.handleStatusChange = this.handleStatusChange.bind(this);
  }

  handleStatusChange(id) {
    this.setState(prevState => {
      return {
        todos: prevState.todos.map(t => {
          if (t.id === id) return { ...t, status: !t.status };
          else return t;
        })
      };
    });
  }

  render() {
    return (
      <div style={styles}>
        <h1 className="todo-title">Todo List</h1>
        <TodoList todos={this.state.todos} onClick={this.handleStatusChange} />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
