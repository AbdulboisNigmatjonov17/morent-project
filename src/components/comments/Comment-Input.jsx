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
        <form onSubmit={handleAddTask} className='mb-5 w-[100%] relative flex justify-between rounded-lg bg-white'>
            <div className='w-full flex gap-5'>
                <input
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder="Add a new task..."
                    className='w-full focus:outline-none py-3 px-5 focus:border-b-[2px] border-black'
                />
                <BtnSM text={'Add'} btn_bg={'#3563E9'} />
            </div>
            {error && <p className='absolute -bottom-6 left-0' style={{ color: 'red' }}>{error}</p>}
        </form>
    );
}

export default CommentInput;
