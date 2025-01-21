import React from 'react';
import CommentItem from './Comment-Item';

function CommentList({ tasks, deleteTask, updateTask }) {
    return (
        <div className='bg-[#c9c9c9]'>
            <ul className='flex flex-col gap-5 bg-inherit'>
                {tasks.map(task => (
                    <CommentItem
                        key={task.id}
                        task={task}
                        deleteTask={deleteTask}
                        updateTask={updateTask}
                    />
                ))}
            </ul>
        </div>
    );
}

export default CommentList;
