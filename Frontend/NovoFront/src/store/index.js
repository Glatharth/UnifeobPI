import { createStore } from "redux";

const INITIAL_STATE = {
  data: [],
  dataEdit: false,
  admin: [],
  color: ""
};

function patients(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "SET_PATIENT":
      return { ...state, data: action.patients };
    case "EDIT_PATIENT":
      return { ...state, dataEdit: action.patient };
    case "SET_ADMIN":
      return { ...state, admin: action.admin };
    case "SET_COLOR":
      return { ...state, color: action.color };
    default:
      return state;
  }
}

const store = createStore(patients);

export default store;
