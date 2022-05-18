import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Component/Home/Home';
import Login from './Component/Shared/Login';
import Navbar from './Component/Shared/Navbar';
import Signup from './Component/Shared/Signup';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
     <Routes>
       <Route path='/'element={<Home></Home>}></Route>
       <Route path='/login'element={<Login></Login>}></Route>
       <Route path='/signup'element={<Signup></Signup>}></Route>
     </Routes>
    </div>
  );
}

export default App;
