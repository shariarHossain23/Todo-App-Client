import { useState } from "react";
import { toast } from "react-toastify";

const TaskCard = ({ todo, selectTask }) => {
  const [complete, setComplete] = useState(false);
  const { name, desc } = todo;
  const handleComplete = () => {
    setComplete(true);
    toast.success("completed");
  };
  return (
    <tr>
      <td>{complete ? <del>{name}</del> : <p>{name}</p>}</td>
      <td>{complete ? <del>{desc}</del> : <p>{desc}</p>}</td>
      <td>
        <button
          onClick={() => handleComplete(todo._id)}
          className="btn btn-xs btn-success text-white"
        >
          Complete
        </button>
      </td>
      <td>
      <label
        >
          Edit
        </label>
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
