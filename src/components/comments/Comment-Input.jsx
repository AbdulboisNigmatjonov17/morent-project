import React, { useState } from 'react';
import BtnSM from '../btns/btnSM';

function CommentInput({ addTask, error }) {
    const [newTask, setNewTask] = useState('');

    const handleAddTask = (e) => {
        e.preventDefault()
        addTask(newTask);
        setNewTask('');
    };

    return (
        <form onSubmit={handleAddTask} className='mt-10 w-[100%] relative flex justify-between rounded-lg bg-white'>
            <div className='w-full flex flex-col'>
                <input
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder="Add a new task..."
                    className='min-w-full focus:outline-none py-3 px-5'
                />
                <div className='absolute -bottom-12 right-0'>
                <BtnSM text={'Add'} btn_bg={'#3563E9'} />
                </div>
            </div>
            {error && <p className='absolute -bottom-7 left-0' style={{ color: 'red' }}>{error}</p>}
        </form>
    );
}

export default CommentInput;
