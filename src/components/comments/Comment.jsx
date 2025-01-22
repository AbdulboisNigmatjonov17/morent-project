import React, { useState, useEffect } from "react";
import CommentInput from "./Comment-Input";
import CommentList from "./Comment-List";
import { v4 as uuidv4 } from "uuid";

function Comment() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [error, setError] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (title) => {
    if (!title.trim()) {
      setError("Required! Write something...");
      return;
    }

    setTasks([...tasks, { id: uuidv4(), title: title.trim(), isEditing: false }]);
    setError("");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const updateTask = (id, updatedTitle) => {
    if (!updatedTitle.trim()) {
      setError("Required! Write something...");
      return;
    }

    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, title: updatedTitle.trim(), isEditing: false }
          : task
      )
    );
    setError("");
  };

  return (
    <div className="bg-white rounded-2xl max-w-full min-h-[150px] flex flex-col justify-between py-5 px-10 gap-5">
      <h1 className="bg-inherit text-[25px] font-semibold">
        Reviews{" "}
        <span className="py-1 px-4 rounded-lg bg-[#3563E9] text-white">
          {tasks.length}
        </span>
      </h1>
      <CommentInput addTask={addTask} error={error} />
      <CommentList tasks={tasks} deleteTask={deleteTask} updateTask={updateTask} />
    </div>
  );
}

export default Comment;
