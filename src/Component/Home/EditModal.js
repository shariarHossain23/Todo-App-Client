import axios from "axios";
import { useState } from "react";

const EditModal = ({ edit, setEdit, refetch }) => {

    const [name,setName] = useState("")
    const [desc,setDesc] = useState("")

    console.log(name,desc);

    console.log();

    const handleUpdateDelete = () => {
        const updateData = {
            name:name,
            desc:desc
        }
        axios.patch(`http://localhost:5000/todo/${edit?._id}`,updateData)
        .then(res => {
            setName("")
            setDesc("")
            refetch()
        })
        
    }

  return (
    <div>
      <input type="checkbox" id="edit-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg">
           Edit Task
          </h3>
          <input onChange={(e)=> setName(e.target.value)} type="text" placeholder="Task Title" class="input input-bordered input-gray w-full max-w-xs mt-4" required />
          <input onChange={(e)=> setDesc(e.target.value)} type="text" placeholder="Task" class="input input-bordered input-gray w-full max-w-xs mt-4" required />
          <div class="modal-action">
          <label  for="edit-modal" class="btn btn-info text-white">
              Cancel
            </label>
            <label onClick={handleUpdateDelete} for="edit-modal" class="btn btn-primary">
              Update
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
