import React from "react";
import { useForm } from "react-hook-form";

const ToDoList = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {};
  return (
    <div className="mt-16 ">
        <h1 className="text-center text-4xl">To Do App</h1>
      <form className=" text-center shadow-lg p-16 rounded">
        <input
         required
          type="text"
          placeholder="your name"
          class="input input-bordered w-full "
        />
        <br />
        <textarea class="textarea textarea-bordered w-full my-6" placeholder="Description"></textarea> <br />
       <button class="btn btn-primary max-w-md">Add</button>
      </form>
    </div>
  );
};

export default ToDoList;
