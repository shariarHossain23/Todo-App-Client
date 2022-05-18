import axios from "axios";
import React, { useState } from "react";
import { useQuery } from "react-query";
import Spinner from "../Shared/Spinner";
import Modal from "./Modal";
import TaskCard from "./TaskCard";

const DisplayTodo = () => {
    const [task,selectTask] = useState(null)

  const [todos, setTodos] = useState([]);
  const { data, isLoading, refetch } = useQuery("todo", () =>
    axios.get("http://localhost:5000/todo").then((response) => {
      setTodos(response.data);
     
    })
  );
  refetch()
  if (isLoading) {
    return <Spinner></Spinner>;
  }

  return (

    <div class="overflow-x-auto">
      <table class="table w-full">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Complete</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => <TaskCard todo={todo} selectTask={selectTask}></TaskCard>)}
        </tbody>
      </table>
      <Modal  task={task} selectTask={selectTask} refetch={refetch}></Modal>
    </div>
  );
};

export default DisplayTodo;
