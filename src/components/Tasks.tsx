import React from 'react'
import { Task } from '../model';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'

interface Props{
  task:Task[],
  tasks:Task;
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>
  editTask:{task:string, id:string, isCompleted:boolean} | null,
  setEditTask: React.Dispatch<React.SetStateAction<Task | null>>
}


const Tasks:React.FC<Props> = ({tasks, task, setTasks, editTask, setEditTask}) => {
const id:string= tasks.id




const handleTaskEdit = () : void =>{

 const   findTask =  task.find(task=>task.id === id) ?? null
 if(!findTask?.isCompleted){
  setEditTask(findTask)
 }

}
const handleCompleted = () : void =>{
  setTasks(task.map(task=>(task.id === id ? {...task, isCompleted: !task.isCompleted}: task)))
}
const handleDelete = () : void =>{
  setTasks(task.filter(task=>(task.id !== id)))
}
  return ( 
   
    <div className="bg-transparent flex gap-10 items-center justify-between  w-full text-white text-xl md:text-2xl py-5">
       <span>{tasks.isCompleted ? <s>{tasks.task}</s>: <span>{tasks.task}</span>}</span>
 
    <div className="flex gap-10 text-white text-2xl">
       <span onClick={handleCompleted}><FontAwesomeIcon icon={faCheck} /></span>
       <span onClick={handleTaskEdit}><FontAwesomeIcon icon={faEdit} /></span>
       <span onClick={handleDelete}><FontAwesomeIcon icon={faTrash} /></span>
    </div>
   </div>
   
  )
}

export default Tasks;