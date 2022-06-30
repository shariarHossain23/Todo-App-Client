import axios from "axios";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Complete = () => {
    const [user] = useAuthState(auth)
    const [completed,setComplete] = useState([])

    const newElement = completed.filter(c => c.updated)
    // console.log(newElement);
    useEffect(()=>{
        axios.get(`http://localhost:5000/todocompleted/${user?.email}`)
        .then(res => {
            setComplete(res.data)
        })
    },[user])
    return (
        <div>
            <h1 className="mt-20 text-4xl text-center">Completed Task</h1>
            
        </div>
    );
};

export default Complete;