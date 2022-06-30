import { useState } from "react";

import Calendar from 'react-calendar';
import './Calendar.css';

import 'react-calendar/dist/Calendar.css';
import Fotter from "../Shared/Fotter";
import Navbar from "../Shared/Navbar";

const Calander = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Navbar></Navbar>
    <div className="mt-24 text-center">
       <Calendar  onChange={onChange} value={value} />
    </div>
    <Fotter></Fotter>
    </div>
  );
};

export default Calander;
