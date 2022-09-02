import { loadData, saveData } from "../hoc/LocalStorage";
import { LOGIN_ERROR, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT } from "./action.type";

const initialState = {
    isAuth:loadData('isAuth') || false,
    error:false,
    loading:false,
    token:loadData('token')|| "",
    role:loadData("role") ||"",
    username:loadData("username")||"",
}

export const authReducer = (state= initialState,{type,payload}) =>{
    switch (type) {
        case LOGIN_REQUEST:{
            return {
                ...state,
                loading:true, 
                error:false
            }
        }
        case LOGIN_SUCCESS:{
            saveData('token',payload.token)
            saveData('isAuth',true)
            saveData('role',payload.role)
            saveData('username',payload.name)
            return {
                ...state,
                loading:false, 
                error:false,
                isAuth:true,
                token:payload.token,
                role:payload.role,
                username:payload.name
            }
        }
        case LOGIN_ERROR:{
            return {
                ...state,
                loading:true, 
                error:false
            }
        }
        case LOGOUT:{
            localStorage.clear();
        }
        default:
            return state;
    }
}