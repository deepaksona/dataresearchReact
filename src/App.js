
import './App.css';
import Login from './screens/login';
import SignUp from './screens/signup';
import Dashboard from './screens/dashboard';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/dashboard' element = {<Dashboard/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
