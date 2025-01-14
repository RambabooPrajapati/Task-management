import React from 'react';
import TaskItem from './TaskItem';
import './TaskList.css';


const TaskList = ({ tasks, onDeleteTask, onUpdateTask }) => {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task._id}
          task={task}
          onDeleteTask={onDeleteTask}
          onUpdateTask={onUpdateTask}
        />
      ))}
    </div>
  );
};

export default TaskList;
