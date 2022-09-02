

import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Login from './Pages/Login';
import Schedule from './Pages/Schedule';
import { UserPage } from "./components/UserPage";




import Signup from './Pages/Signup';
//done

function App() {
  return (
    <div className="App">

      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/signup" element={<Signup />} />
      
        <Route path="/userpage" element={<UserPage />} />
      </Routes>
    </div>
  );
}

export default App;
