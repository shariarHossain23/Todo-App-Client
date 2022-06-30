import axios from "axios";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const TaskCard = ({ todo, selectTask,setEdit }) => {
  const [disable,setDisabled] = useState(false)
  const { name, desc } = todo;
  const navigate = useNavigate()
  const [user] = useAuthState(auth)

  const handleComplete = (e) => {
    if(e.target.checked){
      axios.put(`https://calm-spire-98627.herokuapp.com/todo/${todo?._id}`)
      .then(res => {
        setDisabled(res.data.message)
        toast.success("Task Completed")
        navigate('/complete')
      })
    }
  };

  
  return (
    <tr>
      <td><input onClick={handleComplete} type="checkbox" /></td>
      <td> <p>{name}</p></td>
      <td> <p>{desc}</p></td>
      <td>
      <label onClick={()=> setEdit(todo)} for="edit-modal" class="btn btn-info btn-xs text-white">Edit</label>
      </td>
      <td>
        <label
          onClick={() => selectTask(todo)}
          for="delete"
          class="btn modal-button btn-error btn-xs text-white"
        >
          delete
        </label>
      </td>
    </tr>
  );
};

export default TaskCard;
