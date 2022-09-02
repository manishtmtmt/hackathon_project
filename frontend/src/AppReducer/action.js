//empty
import * as types from "./action.type";
import axios from "axios";
const getDoctorsData = () => (dispatch) => {
  dispatch({ type: types.GET_DOCTORS_DATA_REQUEST });
  axios
    .get("http://localhost:5000/doctors")
    .then((res) =>
      dispatch({ type: types.GET_DOCTORS_DATA_SUCCESS, payload: res.data })
    )
    .catch((err) =>
      dispatch({ type: types.GET_DOCTORS_DATA_FAILURE, payload: err.message })
    );
};

export const singleDoctor =(email) =>dispatch=>{
    dispatch({type:types.GET_SINGLE_DOCTOR_LOADING})
    axios.post('http://localhost:5000/doctors/single',{email})
    .then((r)=>(console.log(r),dispatch({type:types.GET_SINGLE_DOCTOR_SUCCESS,payload:r.data})))
    .catch((err)=>(console.log(err),dispatch({type:types.GET_SINGLE_DOCTOR_ERROR})))
}


export { getDoctorsData };
