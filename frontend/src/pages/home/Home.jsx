import React, { useEffect, useState } from "react";
import { createTask, deleteTask, fetchTasks, updateTask } from "../../api";
import TaskForm from "../../components/TaskForm";
import TaskList from "../../components/TaskList";
import "./Home.css";

const Home = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks().then((res) => setTasks(res.data));
  }, []);

  const addTask = (task) => {
    createTask(task).then((res) => setTasks([res.data, ...tasks]));
  };

  const updateTaskHandler = (id, updatedTask) => {
    updateTask(id, updatedTask).then(
      (res) => setTasks(tasks.map((t) => (t._id === id ? res.data : t))) // Update the task in the list
    );
  };

  const deleteTaskHandler = (id) => {
    deleteTask(id).then(() => setTasks(tasks.filter((t) => t._id !== id)));
  };

  return (
    <div className="homeContainer">
      <div className="container">
        <h1>Task Management System</h1>
        <TaskForm onAddTask={addTask} />
        <TaskList
          tasks={tasks}
          onDeleteTask={deleteTaskHandler}
          onUpdateTask={updateTaskHandler}
        />
      </div>
    </div>
  );
};

export default Home;
