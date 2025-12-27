import React from 'react'
import { CheckCheck } from 'lucide-react';
import { Search } from 'lucide-react';
import { ListFilterPlus } from 'lucide-react';




const TaskList = ({ tasks, deleteTask, toggleTasks }) => {
  return (

    <div className='mt-5 min-h-3/4  h-auto overflow-auto '>
      <div className='px-6 py-3 bg-white  transition-all  rounded'>
        <div className='flex justify-between'>
          <h1 className='text-xl text-purple-700 px-1 font-bold w-fit'>YOUR TASKS</h1>
         
        </div>

        {
          tasks.map((task, idx) => (
            <div
              key={idx}
              className=' flex  justify-between rounded-2xl  hover:bg-purple-200 transition-all hover:scale-105 text-black py-2 px-2 bg-purple-100 overflow-auto mt-3'>

              <div className='flex items-center gap-4'>
                <input onClick={() => toggleTasks(idx)} type="checkbox" name="" id="" className='scale-150 accent-purple-500 cursor-pointer' />
                
                <div className='mr-5' >
                  <span className={`text-l text-purple-500 ${task.done ? "line-through text-gray-400" : ""
                    }`}
                  >{task.text}</span>
                </div>
              </div>
              <div className='flex h-fit justify-between'>

                <button onClick={() => deleteTask(idx)} className='h-8 px-5 bg-purple-500 flex items-center rounded-xl hover:scale-105 hover:bg-red-700 text-l font-bold text-white transition-all'>Delete</button>
              </div>
            </div>
          ))
        }

      </div>
    </div>

  );
};

export default TaskList
