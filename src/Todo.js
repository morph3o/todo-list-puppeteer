import React from "react";
import PropTypes from "prop-types";

const Todo = ({ id, title, status, onClick }) => {
  return (
    <div>
      <input
        onClick={() => onClick(id)}
        type="checkbox"
        checked={status}
        value={title}
      />
      <span style={{ textDecoration: status ? "line-through" : "none" }}>
        {title}
      </span>
    </div>
  );
};

Todo.propTypes = {
  title: PropTypes.string,
  status: PropTypes.bool
};

export default Todo;
