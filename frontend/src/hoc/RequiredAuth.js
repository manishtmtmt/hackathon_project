
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import { loadData } from "./LocalStorage"


export const RequiredAuth = ({ children }) => {
    // let {isAuth} = useSelector((state) => state.login)
    let isAuth = loadData("isAuth")
    if(isAuth){
        return children
    }
    return <Navigate  to="/login" /> 
}