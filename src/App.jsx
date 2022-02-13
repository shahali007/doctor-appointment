import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Appointment from "./Modules/Appointment";
import AppointmentWithRoute from "./Modules/AppointmentWithRoute";
import NoMatch from "./Modules/NoMatch";
import "react-big-calendar/lib/css/react-big-calendar.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Appointment />} />
        <Route
          path="/year/:year/month/:month"
          element={<AppointmentWithRoute />}
        />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
