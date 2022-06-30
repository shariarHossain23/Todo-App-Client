import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";
import Spinner from "../Shared/Spinner";
import Modal from "./Modal";
import TaskCard from "./TaskCard";

const DisplayTodo = () => {
    const [task,selectTask] = useState(null)

  const [todos, setTodos] = useState([]);
  const { data, isLoading, refetch } = useQuery("todo", () =>
    axios.get("https://calm-spire-98627.herokuapp.com/todo").then((response) => {
      setTodos(response.data);
     
    })
  );
  refetch()
  if (isLoading) {
    return <Spinner></Spinner>;
  }

  return (

    <div class="overflow-x-auto mt-16">
      <h1 className="text-4xl mb-16 text-center">To Do List</h1>
      <table class="table w-full">
        <thead>
          <tr>
            <th>List title</th>
            <th>Task</th>
            <th>Complete</th>
            <th>Edit</th>
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
