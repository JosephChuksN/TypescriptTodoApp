import React, {useState} from 'react'
import { Task } from '../model';
import { TbEdit, TbCheck, TbTrash } from 'react-icons/tb'

interface Props{
  task:Task[],
  tasks:Task;
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>
  editTask:{task:string, id:number, isCompleted:boolean} | null,
  setEditTask: React.Dispatch<React.SetStateAction<Task | null>>
}


const Tasks:React.FC<Props> = ({tasks, task, setTasks, editTask, setEditTask}) => {
const id:number= tasks.id




const handleTaskEdit = ()=>{

 const   findTask =  task.find(task=>task.id === id) ?? null
 if(!findTask?.isCompleted){
  setEditTask(findTask)
 }

}
const handleCompleted = () =>{
  setTasks(task.map(task=>(task.id === id ? {...task, isCompleted: !task.isCompleted}: task)))
}
const handleDelete = () =>{
  setTasks(task.filter(task=>(task.id !== id)))
}
  return ( 
   
    <div className="bg-transparent flex gap-10 items-center justify-between p-3 w-full text-white text-2xl">
       <span>{tasks.isCompleted ? <s>{tasks.task}</s>: <span>{tasks.task}</span>}</span>
 
    <div className="flex gap-5 text-white text-2xl">
       <span onClick={handleCompleted}><TbCheck /></span>
       <span onClick={handleTaskEdit}><TbEdit /></span>
       <span onClick={handleDelete}><TbTrash /></span>
    </div>
   </div>
   
  )
}

export default Tasks;