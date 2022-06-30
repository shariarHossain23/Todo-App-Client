import axios from "axios";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../firebase.init";
import Spinner from "../Shared/Spinner";
import EditModal from "./EditModal";
import Modal from "./Modal";
import TaskCard from "./TaskCard";

const DisplayTodo = () => {
  const [task, selectTask] = useState(null);
  const [edit,setEdit] = useState(null)
  const [user] = useAuthState(auth)
  const [todos, setTodos] = useState([]);

  

  const { data, isLoading, refetch } = useQuery("todo", () =>
    axios
      .get(`https://calm-spire-98627.herokuapp.com/todo/${user?.email}`)
      .then((response) => {
        setTodos(response.data);
      })
  );
  refetch();
  if (isLoading) {
    return <Spinner></Spinner>;
  }

 


  return (
    <div>
   
    <div class="overflow-x-auto mt-16">
      <h1 className="text-4xl mb-16 text-center">To Do List</h1>
      <table class="table w-full">
        <thead>
          <tr>
            <td>Complete</td>
            <th>List title</th>
            <th>Task</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <TaskCard todo={todo}  selectTask={selectTask} setEdit={setEdit}></TaskCard>
          ))}
        </tbody>
      </table>
      <Modal task={task} selectTask={selectTask} refetch={refetch}></Modal>
      <EditModal edit={edit} setEdit={setEdit} refetch={refetch}></EditModal>
    </div>

    </div>
  );
};

export default DisplayTodo;
