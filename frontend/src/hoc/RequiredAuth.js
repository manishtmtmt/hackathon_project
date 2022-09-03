import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { loadData } from "./LocalStorage";

export const RequiredAuth = ({ children }) => {
  // let {isAuth} = useSelector((state) => state.login)
  let location = useLocation();
  console.log(location.pathname)
  let isAuth = loadData("isAuth");
  if (isAuth) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location.pathname }} replace/>;
};
