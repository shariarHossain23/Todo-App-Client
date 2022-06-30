import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const ToDoList = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const [name,setName] = useState("")
  const [desc,setDesc] = useState("")
  const submitData = event =>{
      event.preventDefault()
      const todoCollection = {
         name: event.target.name.value,
         desc : event.target.description.value
      }
        axios.post("https://calm-spire-98627.herokuapp.com/todo",todoCollection)
        .then(response => {
            toast.success("updated successfully")
            event.target.reset()
            
        })
    
  }

  const handleKeyPress = (event) => {
    if(event.key === 'Enter'){
      const todoCollection = {
        name: name,
        desc : desc
     }
       axios.post("https://calm-spire-98627.herokuapp.com/todo",todoCollection)
       .then(response => {
           toast.success("updated successfully")
          
           
       })
   ;
    }
  }
  

  // const handleKeyPress = (e) => {
  //   console.log(e);
  // }}
  return (
    <div className="mt-24 ">
        <h1 className="text-center text-4xl ">Add To Do</h1>
      <form onKeyPress={handleKeyPress} onSubmit={submitData} className=" text-center shadow-lg p-16 rounded">
        <input
          required
          type="text"
          placeholder="Task title"
          class="input input-bordered w-full "
          name="name"
          onBlur={(e) => setName(e.target.value)}
        />
        <br />
        <textarea onChange={(e) => setDesc(e.target.value)}  class="textarea textarea-bordered w-full my-6" placeholder="Add Task" name="description" required></textarea> <br />
       <button class="btn btn-primary max-w-md">Add</button>
      </form>
    </div>
  );
};

export default ToDoList;
