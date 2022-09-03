import { Navigate, useLocation } from "react-router-dom";
import { loadData } from "./LocalStorage";

export const RequiredRole = ({ children }) => {
  const location = useLocation();
  let role = loadData("role");
  if (role === "doctor") {
    return children;
  }
  return <Navigate to="/userpage" state={{ from: location }} replace />;
};

export const RequiredRoleUser = ({ children }) => {
    const location = useLocation();
  let role = loadData("role");
  if (role === "user") {
    return children;
  }
  return <Navigate to="/adminpage" state={{ from: location }} replace />;
};
