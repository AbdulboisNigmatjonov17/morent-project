import React, { useState } from 'react';
import CommentInput from './Comment-Input';
import CommentList from './Comment-List';
import { v4 as uuidv4 } from 'uuid';

function Comment() {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState('');

  const addTask = (title) => {
    if (!title.trim()) {
      setError('Required! write something...');
      return;
    }
    if (tasks.some(task => task.title === title.trim())) {
      setError('This title already have'); 
      return;
    }

    setTasks([...tasks, { id: uuidv4(), title: title.trim(), isEditing: false }]);
    setError(''); 
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const updateTask = (id, updatedTitle) => {
    if (!updatedTitle.trim()) {
      setError('Required! write something...'); 
      return;
    }
    if (tasks.some(task => task.title === updatedTitle.trim() && task.id !== id)) {
      setError('This title already have');
      return;
    }

    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, title: updatedTitle.trim(), isEditing: false } : task
      )
    );
    setError(''); 
  };

  return (
    <div className='bg-[#60ff17] max-w-full min-h-[200px] flex flex-col justify-between pt-5 pb-16  px-10'>
      <h1 className='bg-inherit text-[25px] font-semibold'>Reviews <span className='py-1 px-4 rounded-lg  bg-[#3563E9] text-white'>{tasks.length}</span></h1>
      <CommentList tasks={tasks} deleteTask={deleteTask} updateTask={updateTask} />
      <CommentInput addTask={addTask} error={error} />
    </div>
  );
}

export default Comment;
