"use client"
import { useState } from "react";


const page= ()=>{
    const[task,settask]=useState("")
    const[desc,setdesc]=useState("")
    const[mainTask,setmaintask]=useState([])


    const submitFn= (c)=>{
            c.preventDefault()
            // console.log(task)
            // console.log(desc)
            setmaintask([...mainTask, {task,desc}])
            settask("")
            setdesc("")
    }
    const deleteHandler=(i)=>{
        let copyTask=[...mainTask]
        copyTask.splice(i,1)
        setmaintask(copyTask)
    }
    
    
    let rendertask=<h2>No task available</h2>
    if(mainTask.length>0)
    rendertask= mainTask.map((t,i)=>{
        return(
            <li key={i}>
            <div className="flex justify-between">
                <h3 className="text-3xl text-slate-600 font-bold p-2">{t.task}</h3>
                <h3 className="text-3xl text-slate-600 font-bold p-2">{t.desc}</h3>
                <button 
                onClick={()=>{
                    deleteHandler(i)
                }}
                className="text-2xl rounded bg-red-700 border-b-red-950 border-4 p-2"
                >Delete</button>
            </div>
            </li>
        )
    });

   return(
    <>
    <h1 className="bg-black text-white text-5xl p-5 font-bold text-center">BNGD Todo List</h1>
    <form onSubmit={submitFn}>
        <input type='text'
         className="border-black text-2xl p-3 border-4 mx-5 my-8"
         placeholder="Enter task here"
         value={task}
         onChange={(a)=>{
            settask(a.target.value)          //two way Binding
         }}
         />
         <input type='text'
         className="border-black text-2xl p-3 border-4 mx-5 my-8"
         placeholder="Enter description here"
         value={desc}
         onChange={(b)=>{
            setdesc(b.target.value)          //two way Binding
         }}
         />
         <button className="bg-black text-white p-2 mx-5 ">Add Task</button>
    </form>
    <hr/>
    <div className="bg-cyan-100  p-8 ">
        <ul>
            {rendertask}
        </ul>
    </div>
    </>
   );
}
export default page