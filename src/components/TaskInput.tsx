import React, { useEffect } from 'react' 


interface Props {
  task:string,
  setTask:React.Dispatch<React.SetStateAction<string>>,
  handleAddTask:(e:React.FormEvent<EventTarget>) => void,
  editTask:{task:string, id:number, isCompleted:boolean} | null,
  setEditTask: React.Dispatch<React.SetStateAction<{
    task:string,
    id: number;
    isCompleted: boolean;
} | null>>
}

const Inputs: React.FC<Props> = ({task, setTask, handleAddTask, editTask, setEditTask}) => {

 useEffect(()=>{
  if(editTask){
    setTask(editTask.task)
  }else{
    setTask("")
  }
 },[setTask, editTask])

  return (
    <form onSubmit={handleAddTask} className="flex gap-8 w-3/4 justify-center items-center mx-auto">
        <input 
         className="w-2/5 p-3 rounded-md "
         type="text"
         value={task}
         onChange={(e)=>{setTask(e.target.value)}}
         required
         />
         <button type="submit"  className="p-3 bg-[#1a73e8]  text-white rounded w-32">{editTask ? "Save" : "Add Task"}</button>
    </form>
  )
}

export default Inputs;