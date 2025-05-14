import React, { useState } from "react";

function ToDoList() {
  const [tasks, setTask] = useState([
    "Eat breakfast",
    "Walk your father",
    "Eat something else",
  ]);
  const [newtask, setnewTask] = useState('');

  // Handle input change
  function handleinputchange(event) {
    setnewTask(event.target.value);
  }

  // Add new task
  function addtask() {
    if (newtask.trim() !== "") {
      setTask((t) => [...tasks, newtask]);
      setnewTask(""); // Clear the input after adding
    }
  }

  // Delete task by index
  function deletetask(index) {
    const updated = tasks.filter((_, i) => i !== index);
    setTask(updated);
  }

  // Move task up
  function moveup(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      const [movedTask] = updatedTasks.splice(index, 1);
      updatedTasks.splice(index - 1, 0, movedTask);
      setTask(updatedTasks);
    }
  }

  // Move task down
  function movedown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      const [movedTask] = updatedTasks.splice(index, 1);
      updatedTasks.splice(index + 1, 0, movedTask);
      setTask(updatedTasks);
    }
  }

  return (
    <div className="todolist">
      <h1>ToDoList</h1>

      <div>
        <input
          type="text"
          placeholder="What's on your mind?"
          value={newtask}
          onChange={handleinputchange}
        />
        <button className="add-button" onClick={addtask}>
          Add
        </button>
      </div>

      <div>
        <ol>
          {tasks.map((task, index) => (
            <li className="listel" key={index}>
              <span>{task}</span>
              <button
                className="delete-button"
                onClick={() => deletetask(index)}
              >
                Delete
              </button>
              <button
                className="moveup"
                onClick={() => moveup(index)}
              >
                ⬆️
              </button>
              <button
                className="movedown"
                onClick={() => movedown(index)}
              >
                ⬇️
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default ToDoList;
