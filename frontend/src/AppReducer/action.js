//empty
import * as types from "./action.type";
import { useToast } from "@chakra-ui/react";
import axios from "axios";

const getDoctorsData = () => (dispatch) => {
  dispatch({ type: types.GET_DOCTORS_DATA_REQUEST });
  axios
    .get("https://hackathon-elite-coders.herokuapp.com/doctors")
    .then((res) =>
      dispatch({ type: types.GET_DOCTORS_DATA_SUCCESS, payload: res.data })
    )
    .catch((err) =>
      dispatch({ type: types.GET_DOCTORS_DATA_FAILURE, payload: err.message })
    );
};

export const singleDoctor = (email) => (dispatch) => {
  dispatch({ type: types.GET_SINGLE_DOCTOR_LOADING });
  axios
    .post("https://hackathon-elite-coders.herokuapp.com/doctors/single", {
      email,
    })
    .then(
      (r) => (
        console.log(r),
        dispatch({ type: types.GET_SINGLE_DOCTOR_SUCCESS, payload: r.data })
      )
    )
    .catch(
      (err) => (
        console.log(err), dispatch({ type: types.GET_SINGLE_DOCTOR_ERROR })
      )
    );
};

export const bookAppointment = (param, data) => (dispatch) => {
  dispatch({ type: types.BOOK_APPOINTMENT_LOADING });
  return axios
    .post(
      `https://hackathon-elite-coders.herokuapp.com/patient/create/${param}`,
      data
    )
    .then((res) =>
      dispatch({ type: types.BOOK_APPOINTMENT_SUCESSS, payload: data })
    )
    .catch((err) =>
      dispatch({
        type: types.BOOK_APPOINTMENT_FAILURE,
        payload: err.response.data,
      })
    );
};

export const getPatientQueueLength = (params) => (dispatch) => {
  return axios
    .get(`https://hackathon-elite-coders.herokuapp.com/patient/queue/${params}`)
    .then((res) => {
      dispatch({ type: types.PATIENT_QUEUE_LENGTH, payload: res.data });
    });
};

export const getPatientQueue = (params) => (dispatch) => {
  return axios
    .get(
      `https://hackathon-elite-coders.herokuapp.com/patient/patientQueue/${params}`
    )
    .then((res) => {
      dispatch({ type: types.PATIENT_QUEUE, payload: res.data });
    });
};

export const updateStatus = (id, data) => (dispatch) => {
  dispatch({ type: types.UPDATE_PATIENTS_DATA_REQUEST });
  return axios
    .patch(
      `https://hackathon-elite-coders.herokuapp.com/patient/edit/${id}`,
      data
    )
    .then((res) =>
      dispatch({ type: types.UPDATE_PATIENTS_DATA_SUCCESS, payload: res.data })
    )
    .catch((err) =>
      dispatch({ type: types.UPDATE_PATIENTS_DATA_FAILURE, payload: err })
    );
};
export { getDoctorsData };
