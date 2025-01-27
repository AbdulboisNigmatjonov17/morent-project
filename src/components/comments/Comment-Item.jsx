import React, { useState } from 'react';
import BtnSM from '../btns/btnSM';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function CommentItem({ task, deleteTask, updateTask }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(task.title);

    const handleSave = () => {
        updateTask(task.id, editedTitle);
        setIsEditing(false);
    };

    return (
        <li className=''>
            <div className='relative'>
                {isEditing ? (
                    <form className='flex items-center gap-10'>
                        <input
                            type="text"
                            value={editedTitle}
                            onChange={(e) => setEditedTitle(e.target.value)}
                            className='w-full focus:outline-none mb-10 py-3 px-2 focus:border-b-[2px] border-black'
                        />
                        <BtnSM onClick={handleSave} text={'save'} btn_bg={'#4ebeff'} />
                    </form>
                ) : (
                    <>
                        <div className='flex flex-col gap-5 px-10 py-5 rounded-2xl w-[100%] bg-[#f8f8f8]'>
                            <div className='max-w-full flex justify-between '>
                                <div className='flex items-center'>
                                    <AccountCircleIcon fontSize='large' />
                                    <div className=''>
                                        <h2>userName</h2>
                                        <h3 className='text-[#90A3BF]'>Job</h3>
                                    </div>
                                </div>
                                <div>
                                    <h2 className='text-[#90A3BF]'>data</h2>
                                    <div>yulduz</div>
                                </div>
                            </div>
                            <div className='w-full flex justify-between'>
                                <p className='max-w-[70%] text-[#90A3BF] break-words'>{task.title}</p>
                                <div className='w-[30%] flex justify-end gap-2 items-end'>
                                    <BtnSM onClick={() => setIsEditing(true)} text={'edit'} btn_bg={'#4ebeff'} />
                                    <BtnSM onClick={() => deleteTask(task.id)} text={'delete'} btn_bg={'#3563E9'} />
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </li>
    );
}

export default CommentItem;
