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

export { getDoctorsData };
