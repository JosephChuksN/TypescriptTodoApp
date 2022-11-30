import React from 'react'
import { Task } from '../model'
import Tasks from './Tasks'


interface Props {
    tasks:Task[],
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>
    editTask:{task:string, id:number, isCompleted:boolean} | null,
    setEditTask: React.Dispatch<React.SetStateAction<
      Task
   | null>>
}

const TaskList:React.FC<Props> = ({tasks, setTasks, editTask, setEditTask}) => {
  return (
    <div className="w-2/5 p-5 rounded-md shadow-md shadow-black">
      {tasks.map((task)=>(
        <Tasks 
        key={task.id} 
        tasks={task} 
        task={tasks} 
        setTasks={setTasks}
        editTask={editTask}
        setEditTask={setEditTask}
         />
      ))}
     </div>
  );
}

export default TaskList