import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

const TaskCard = ({ todo, selectTask,setEdit }) => {
  const [disable,setDisabled] = useState(false)
  const [reload,setReload] = useState(false)
  const { name, desc } = todo;
  const handleComplete = (e) => {
    if(e.target.checked){
      axios.put(`http://localhost:5000/todo/${todo?._id}`)
      .then(res => {
        setDisabled(res.data.message)
        toast.success("Task Completed")
      })
    }
  };

  
  return (
    <tr>
      <td><input onClick={handleComplete} disabled={disable}  type="checkbox" /></td>
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
