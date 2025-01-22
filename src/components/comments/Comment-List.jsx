// import React, { useState } from 'react';
// import CommentItem from './Comment-Item';

// function CommentList({ tasks, deleteTask, updateTask }) {

//     const [hide, setHide] = useState(false)


//     return (
//         <div className=' w-full'>
//             <ul className='w-full flex flex-col gap-5 bg-inherit'>
//                 {tasks.map(task => (
//                     <CommentItem
//                         key={task.id}
//                         task={task}
//                         deleteTask={deleteTask}
//                         updateTask={updateTask}
//                     />
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default CommentList;
import React, { useState } from 'react';
import CommentItem from './Comment-Item';

function CommentList({ tasks, deleteTask, updateTask }) {

    const [hide, setHide] = useState(false)


    return (
        <div className=' w-full'>
            <ul className='w-full flex flex-col gap-5 bg-inherit'>
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
