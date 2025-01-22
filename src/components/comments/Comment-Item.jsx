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
                    <>
                        <input
                            type="text"
                            value={editedTitle}
                            onChange={(e) => setEditedTitle(e.target.value)}
                            className='min-w-full focus:outline-none mb-10 py-3 px-2 '
                        />
                        <div className='absolute -bottom-3 right-0'>
                            <BtnSM onClick={handleSave} text={'save'} btn_bg={'#4ebeff'} />
                        </div>
                    </>
                ) : (
                    <>
                        <div className='flex flex-col gap-5 px-10 py-5 rounded-2xl w-[100%]'>
                            <div className='max-w-full flex justify-between '>
                                <div className='flex items-center'>
                                    <AccountCircleIcon fontSize='large' />
                                    <div className=''>
                                        <h2>userName</h2>
                                        <h3>Job</h3>
                                    </div>
                                </div>
                                <div>
                                    <h2>data</h2>
                                    <div>yulduz</div>
                                </div>
                            </div>
                            <div className='w-full min-h-full flex flex-col justify-between'>
                                <p className='w-[100%] text-[#aaaaaa] min-h-[100px] break-words'>{task.title}</p>
                                <div className='w-full flex justify-end gap-2'>
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
