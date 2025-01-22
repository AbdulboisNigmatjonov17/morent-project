import React, { useState } from 'react';
import CommentItem from './Comment-Item';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';

function CommentList({ tasks, deleteTask, updateTask }) {
    const [visibleCount, setVisibleCount] = useState(2);

    const showAllComments = () => {
        setVisibleCount(tasks.length);
    };

    const showLessComments = () => {
        setVisibleCount(2);
    };

    return (
        <div className="w-full">
            <ul className="w-full flex flex-col gap-5">
                {tasks.slice(0, visibleCount).map((task) => (
                    <CommentItem
                        key={task.id}
                        task={task}
                        deleteTask={deleteTask}
                        updateTask={updateTask}
                    />
                ))}
            </ul>

            <div className="w-full flex justify-center mt-4">
                {tasks.length > visibleCount ? (
                    <button
                        onClick={showAllComments}
                        className="text-blue-500 hover:border-b-2 border-blue-500 flex "
                    >
                        View All Comments 
                        <ArrowDownwardOutlinedIcon/>
                    </button>
                ) : (
                    tasks.length > 2 && (
                        <button
                            onClick={showLessComments}
                            className="text-blue-500 hover:border-b-2 border-blue-500 flex" 
                        >
                            Show Less 
                            <ArrowUpwardOutlinedIcon/>
                        </button>
                    )
                )}
            </div>
        </div>
    );
}

export default CommentList;
