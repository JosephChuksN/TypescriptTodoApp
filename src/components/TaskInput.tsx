import React, { useEffect } from 'react' 


interface Props {
  task:string,
  setTask:React.Dispatch<React.SetStateAction<string>>,
  handleAddTask:(e:React.FormEvent<EventTarget>) => void,
  editTask:{task:string, id:string, isCompleted:boolean} | null,
  setEditTask: React.Dispatch<React.SetStateAction<{
    task:string,
    id: string;
    isCompleted: boolean;
} | null>>
}

const Inputs: React.FC<Props> = ({task, setTask, handleAddTask, editTask, setEditTask}) => {

 useEffect(()  : void=>{
  if(editTask){
    setTask(editTask.task)
  }else{
    setTask("")
  }
 },[setTask, editTask])

  return (
    <form onSubmit={handleAddTask} className="flex flex-col md:flex-row gap-8 w-full lg:w-3/4  justify-center items-center mx-auto">
        <input 
         className="w-full md:w-2/5 p-3 rounded-md "
         type="text"
         value={task}
         onChange={(e)=>{setTask(e.target.value)}}
         required
         />
         <button type="submit"  className="p-3 bg-[#1a73e8]  text-white rounded w-22 md:w-32">{editTask ? "Save" : "Add Task"}</button>
    </form>
  )
}

export default Inputs;