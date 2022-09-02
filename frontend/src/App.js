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
import { RequiredAuth } from "./hoc/RequiredAuth";
import { RequiredRole, RequiredRoleUser } from "./hoc/RequiredRole";

//done

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/home"
          element={
            <RequiredAuth>
              <Home />
            </RequiredAuth>
          }
        />
        <Route
          path="/schedule"
          element={
            <RequiredAuth>
              <RequiredRole>
                <Schedule />
              </RequiredRole>
            </RequiredAuth>
          }
        />
        <Route path="/signup" element={<Signup />} />

        <Route
          path="/adminpage"
          element={
            <RequiredAuth>
              <RequiredRole>
                <AdminsPage />
              </RequiredRole>
            </RequiredAuth>
          }
        />

        <Route
          path="/userpage"
          element={
            <RequiredAuth>
              <RequiredRoleUser>
                <UserPage />
              </RequiredRoleUser>
            </RequiredAuth>
          }
        />
        <Route
          path="/doctorprofile/:id"
          element={
            <RequiredAuth>
              <RequiredRoleUser>
                <DoctorProfile />
              </RequiredRoleUser>
            </RequiredAuth>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
