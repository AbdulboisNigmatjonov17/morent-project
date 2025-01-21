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
        <form onSubmit={handleAddTask} className='mt-10 max-w-full relative flex justify-between pl-3 rounded-lg bg-white'>
            <div className='max-w-full flex flex-col'>
                <input
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder="Add a new task..."
                    className='max-w-[960px] focus:outline-none py-3'
                />
                <div className='absolute -bottom-12 right-0'>
                <BtnSM text={'Add'} btn_bg={'#3563E9'} />
                </div>
            </div>
            {error && <p className='absolute -bottom-5 right-0' style={{ color: 'red' }}>{error}</p>}
        </form>
    );
}

export default CommentInput;
