import moment from "moment";
import { AppointmentType } from "./actionType";

const now = new Date();
const appointmentsArr = [
  {
    title: "Jhon Doe",
    gender: "Male",
    age: 51,
    start: new Date(),
    end: new Date(),
    time: "02:10 PM",
  },
];

const initialState = {
  appointments: appointmentsArr,
};

export default (state = initialState, action) => {
  //console.log('action', action);
  switch (action.type) {
    case AppointmentType.APPOINTMENTS:
      return {
        ...state,
        appointments: action.payload,
      };
    case AppointmentType.ADD_APPOINTMENT:
      return {
        ...state,
        appointments: [...state.appointments, action.payload],
      };

    default:
      return state;
  }
};
