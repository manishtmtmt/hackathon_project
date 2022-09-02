import { LOGIN_ERROR, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT } from "./action.type"
import axios from 'axios'


export const loginApi = (data) =>dispatch =>{
    dispatch({type:LOGIN_REQUEST})
    axios.post('http://localhost:5000/user/login',data)
    .then((r)=>(console.log(r),dispatch({type:LOGIN_SUCCESS,payload:r.data})))
    .catch((err)=>(console.log(err),dispatch({type:LOGIN_ERROR})))
}


export const Logoutapi = () => dispatch =>{
    dispatch({type:LOGOUT})
}