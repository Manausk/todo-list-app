import React from "react";

function InputTodo() {
  return (
    <div className="input-container">
      <input
        type="text"
        className="input-box-todo"
        placeholder="Enter your todo"
      />
      <button type="" className="add-btn">
        +
      </button>
    </div>
  );
}

export default InputTodo;
