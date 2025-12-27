
import Head from './Head'
import TaskList from './TaskList'
import { useState } from 'react'



const Box = () => {
  const [tasks, setTasks] = useState([])

  const addTasks = (taskText)=>{
    setTasks([...tasks, {text: taskText, done: false}]);
  } 

    
  

  const [search, setSearch] = useState("");

  const filteredTasks = tasks.filter((task) =>
  task.text.toLowerCase().includes(search.toLowerCase())
);



  const toggleTasks = (index)=>{
    const copy = [...tasks]
     copy[index].done = !copy[index].done
    setTasks(copy)
  }

  const deleteTask = (index) => {
  const copy = [...tasks];   
  copy.splice(index, 1);   
  setTasks(copy);           
};

  return (
    <div
      className='h-4/5 flex flex-col bg-linear-to-br  from-purple-500  to-black  w-1/3  rounded-xl px-2 py-2 border-2 font-medium  border-fuchsia-100  '>
      <Head addTasks = {addTasks}/>
      <TaskList tasks={tasks} toggleTasks={toggleTasks} deleteTask={deleteTask}/>
    </div>
  )
}

export default Box;
