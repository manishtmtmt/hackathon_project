import * as types from "./action.type";

const initialState = {
  doctors: [],
  loading: false,
  error: false,
  singledoc:{},
  patients: [],
  noOfPatient: 0
};

export const appReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_DOCTORS_DATA_REQUEST: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case types.GET_DOCTORS_DATA_SUCCESS: {
      return {
        ...state,
        doctors: payload,
        loading: false,
        error: false,
      };
    }
    case types.GET_DOCTORS_DATA_FAILURE: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case types.GET_SINGLE_DOCTOR_LOADING:{
      return {
        ...state,
        loading: true,
        error:false
      }
    }
    case types.GET_SINGLE_DOCTOR_SUCCESS:{
      return {
        ...state,
        loading:false,
        error:false,
        singledoc:payload
      }
    }
    case types.GET_SINGLE_DOCTOR_ERROR:{
      return {
        ...state,
        loading:false,
        error:true,
      }
    }

    case types.BOOK_APPOINTMENT_LOADING : {
      return {
        ...state,
        loading: true,
      }
    }

    case types.BOOK_APPOINTMENT_SUCESSS: {
      return {
        ...state,
        loading: false,
        patients: [...state.patients, payload]
      }
    }

    case types.BOOK_APPOINTMENT_FAILURE: {
      return {
        ...state,
        loading: false,
        error: true
      }
    }

    case types.PATIENT_QUEUE_LENGTH: {
      return {
        ...state,
        noOfPatient: payload
      }
    }

    default: {
      return state;
    }
  }
};
