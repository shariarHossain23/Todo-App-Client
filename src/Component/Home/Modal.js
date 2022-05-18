import axios from "axios";
import React from "react";
import { toast } from "react-toastify";

const Modal = ({task,selectTask,refetch}) => {
    const id = task?._id;

    const handleDelete = () => {
        axios.delete(`https://calm-spire-98627.herokuapp.com/todo/${id}`)
        .then(response => {
            if(response.data.deletedCount > 0){
                toast.success("successfully deleted")
                refetch()
                selectTask(null)
            }
           
        })
    }
  return (
    <div>
      <input type="checkbox" id="delete" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg">
            Are you sure?
          </h3>
          <div class="modal-action">
          <label for="delete" onClick={handleDelete} class="btn btn-error text-white">
              Delete
            </label>
            <label for="delete" class="btn">
              cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
