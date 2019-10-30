import { createStore } from "redux";

const INITIAL_STATE = {
  data: [],
  dataEdit: false
};

function patients(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "SET_PATIENT":
      return { ...state, data: action.patients };
    case "EDIT_PATIENT":
      return { ...state, dataEdit: action.patient };
    default:
      return state;
  }
}

const store = createStore(patients);

export default store;
