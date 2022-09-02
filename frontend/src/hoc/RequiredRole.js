
import { Navigate } from "react-router-dom"
import { loadData } from "./LocalStorage"


export const RequiredRole = ({ children }) => {
    let role = loadData("role")
    if(role === "doctor"){
        return children
    }
    return <Navigate  to="/userpage" /> 
}

export const RequiredRoleUser = ({ children }) => {
    let role = loadData("role")
    if(role === "user"){
        return children
    }
    return <Navigate  to="/adminpage" /> 
}