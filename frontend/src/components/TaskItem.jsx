import React, { useState } from "react";
import "./TaskItem.css";

const TaskItem = ({ task, onDeleteTask, onUpdateTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTask, setUpdatedTask] = useState({
    title: task.title,
    description: task.description,
  });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setUpdatedTask({ title: task.title, description: task.description }); // Reset form
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedTask((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateTask(task._id, updatedTask); // Pass the updated data to the parent (App.js)
    setIsEditing(false); // Exit edit mode
  };

  const handleToggleCompletion = () => {
    const updatedTask = {
      ...task,
      completed: !task.completed, // Toggle the completion status
    };
    onUpdateTask(task._id, updatedTask); // Pass the updated task data to the parent
  };

  return (
    <div className={`task-item ${task.completed ? "completed" : ""}`}>
      <div className="task-details">
        {isEditing ? (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="title"
              value={updatedTask.title}
              onChange={handleInputChange}
              required
            />
            <textarea
              name="description"
              value={updatedTask.description}
              onChange={handleInputChange}
            ></textarea>
            <button type="submit">Update Task</button>
            <button type="button" onClick={handleCancelClick}>
              Cancel
            </button>
          </form>
        ) : (
          <>
            <div className="button-group">
              <button className="toggle-btn" onClick={handleToggleCompletion}>
                {task.completed ? "Mark Incomplete" : "Mark Complete"}
              </button>
              <button
                className="delete-btn"
                onClick={() => onDeleteTask(task._id)}
              >
                Delete
              </button>
              <button className="edit-btn" onClick={handleEditClick}>
                Edit
              </button>
            </div>

            <div>
              <div>
                <h3>{task.title}</h3>
                <p>{task.description}</p>
                <p>Completed: {task.completed ? "Yes" : "No"}</p>
                <p>Created At: {new Date(task.createdAt).toLocaleString()}</p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default TaskItem;
