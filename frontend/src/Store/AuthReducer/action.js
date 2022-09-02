import * as types from "./actionTypes";
import axios from "axios";

export const register = (payload) => (dispatch) => {
  dispatch({ type: types.USER_REGISTER_LOADING });
  return axios
    .post("http://localhost:5000/user/create", payload, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      dispatch({ type: types.USER_REGISTER_SUCCESS, payload: res.data });
      return { status: types.USER_REGISTER_SUCCESS, message: res.data };
    })
    .catch((err) => {
      dispatch({
        type: types.USER_REGISTER_FAILURE,
        payload: err.response.data,
      });
      return {
        status: types.USER_REGISTER_FAILURE,
        message: err.response.data,
      };
    });
};
