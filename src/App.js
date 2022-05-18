import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Home from './Component/Home/Home';
import Login from './Component/Shared/Login';
import Navbar from './Component/Shared/Navbar';
import RequireAuth from './Component/Shared/RequireAuth';
import Signup from './Component/Shared/Signup';

function App() {
  return (
    <div>
      <ToastContainer/>
      <Navbar></Navbar>
     <Routes>
       <Route path='/'element={<RequireAuth>
        <Home></Home>
       </RequireAuth>}></Route>
       <Route path='/login'element={<Login></Login>}></Route>
       <Route path='/signup'element={<Signup></Signup>}></Route>
     </Routes>
    </div>
  );
}

export default App;
