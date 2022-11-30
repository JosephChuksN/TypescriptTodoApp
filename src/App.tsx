import React, {useState} from 'react';
import { Task } from './model';
import Inputs from './components/TaskInput';
import TaskList from './components/TaskList';


const  App: React.FC = () => {
  
  const [tasks, setTasks] = useState<Task[]>([])
  const [task, setTask] = useState<string>("")
  const [editTask, setEdittask] = useState<Task | null>(null)

  const updateTasks = (task: string, id: number, isCompleted: boolean) : void =>{
     const updatedTask = tasks.map((tasks)=>(tasks.id === id ? {id, task, isCompleted}: tasks))
     setTasks(updatedTask)
     setEdittask(null)
  }
  //handles submit
  const handleAddTask = (e:React.FormEvent<EventTarget>) : void =>{
    e.preventDefault()
    if(!editTask){
      setTasks([...tasks, {id:Date.now(), task, isCompleted: false}])
      setTask("")
      
    }else{
      
      updateTasks(task, editTask.id, editTask.isCompleted)
      setEdittask(null)
    }
       
  }

  return (
    
    <div className="text-xl flex flex-col items-center px-3 gap-10 mx-auto pt-10  bg-gradient-to-r from-[#0d1114] to-[#0c0f11] h-[100vh]">
      <span className=" text-3xl md:text-5xl text-white font-semibold italic font-mono mb-10">Tasktivities</span>
         <Inputs 
          task={task} 
          setTask={setTask} 
          handleAddTask={handleAddTask} 
          editTask={editTask}
          setEditTask={setEdittask} />
         <TaskList 
          tasks={tasks} 
          setTasks={setTasks}
          editTask={editTask}
          setEditTask={setEdittask} 
          />
          
    </div>
  );
}

export default App;
