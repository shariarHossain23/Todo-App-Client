import { useState } from "react";

import Calendar from 'react-calendar';
import './Calendar.css';

import 'react-calendar/dist/Calendar.css';

const Calander = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div className="mt-24 text-center">
       <Calendar  onChange={onChange} value={value} />
    </div>
  );
};

export default Calander;
