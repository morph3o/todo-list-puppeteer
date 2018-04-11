import React from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";

const TodoList = ({ todos, onClick }) => {
  return (
    <div>
      {todos.map(t => {
        return <Todo {...t} onClick={onClick} />;
      })}
    </div>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array
};

export default TodoList;
