import { AppointmentType } from "./actionType";

const AllAppointments = (appointments) => ({
  type: AppointmentType.APPOINTMENTS,
  payload: appointments,
});

const addAppointment = (appointment) => ({
  type: AppointmentType.ADD_APPOINTMENT,
  payload: appointment,
});

const Appointments = {
  AllAppointments,
  addAppointment,
};

export default Appointments;
