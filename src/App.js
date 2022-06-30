import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Calander from './Component/Home/Calander';
import Complete from './Component/Home/Complete';
import Home from './Component/Home/Home';
import ToDoList from './Component/Home/ToDoList';
import Login from './Component/Shared/Login';
import RequireAuth from './Component/Shared/RequireAuth';
import Signup from './Component/Shared/Signup';

function App() {
  return (
    <div>
      <ToastContainer/>
      
     <Routes>
       <Route path='/'element={<RequireAuth>
        <Home></Home>
       </RequireAuth>}></Route>
       <Route path='/add-todo' element={<RequireAuth>
        <ToDoList></ToDoList>
       </RequireAuth>}></Route>
       <Route path='/complete' element={<RequireAuth>
        <Complete></Complete>
       </RequireAuth>}></Route>
       <Route path='/calendar' element={<RequireAuth>
        <Calander></Calander>
       </RequireAuth>}></Route>
       <Route path='/login'element={<Login></Login>}></Route>
       <Route path='/signup'element={<Signup></Signup>}></Route>
     </Routes>
    </div>
  );
}

export default App;
