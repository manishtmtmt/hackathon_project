import * as types from "./action.type";

const initialState = {
  doctors: [],
  loading: false,
  error: false,
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
    default: {
      return state;
    }
  }
};
