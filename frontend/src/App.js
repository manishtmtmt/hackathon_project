import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Login from "./Pages/Login";
import Schedule from "./Pages/Schedule";

import Signup from "./Pages/Signup";
import AdminsPage from "./Pages/AdminsPage";



import { DoctorProfile } from "./Pages/DoctorProfile";
import { UserPage } from "./Pages/UserPage";

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

        <Route path="/adminpage" element={<AdminsPage />} />

        <Route path="/userpage" element={<UserPage />} />
        <Route path="/doctorprofile/:id" element={<DoctorProfile />} />
      </Routes>
    </div>
  );
}

export default App;
