import axios from "axios";
import React from "react";
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
  const submitData = event =>{
      event.preventDefault()
      const todoCollection = {
         name: event.target.name.value,
         desc : event.target.description.value
      }
 
      axios.post("http://localhost:5000/todo",todoCollection)
      .then(response => {
          toast.success("updated successfully")
          event.target.reset()
      })
  }
  return (
    <div className="mt-16 ">
        <h1 className="text-center text-4xl">To Do App</h1>
      <form onSubmit={submitData} className=" text-center shadow-lg p-16 rounded">
        <input
          required
          type="text"
          placeholder="your name"
          class="input input-bordered w-full "
          name="name"
        />
        <br />
        <textarea class="textarea textarea-bordered w-full my-6" placeholder="Description" name="description"></textarea> <br />
       <button class="btn btn-primary max-w-md">Add</button>
      </form>
    </div>
  );
};

export default ToDoList;
