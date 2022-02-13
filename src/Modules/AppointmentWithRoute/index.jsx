import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";
import YearMonthDropdown from "../../Components/YearMonthDropdown";
import CreateAppointment from "../../Components/Form";
import Details from "../../Components/Details";
import { useLocation } from "react-router-dom";

const localizer = momentLocalizer(moment);

const AppointmentWithRoute = (props) => {
  const { search } = useLocation();
  let url = window.location.href;
  let arr = url.split("/");
  let result = arr[0] + "//" + arr[2];

  console.log("search", search);

  const { appointments } = useSelector((state) => state.appointments);
  const [appoins, setAppoints] = React.useState(appointments);
  const [byDefaultDate, setByDefaultDate] = React.useState(new Date());
  appointments.sort(function (a, b) {
    return new Date(a.start) - new Date(b.start);
  });

  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState({});
  const handleOpen = (event) => {
    setOpen(true);
    setData(event);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getYearMonthChange = (year, month) => {
    console.log(year, month);
    console.log(result + "/year/" + year + "/month/" + month);
  };

  return (
    <div>
      <Box
        display="flex"
        width={1}
        justifyContent={"space-between"}
        alignItems="center"
        mb={3}
      >
        <Box flexShrink={0}>
          <YearMonthDropdown getYearMonthChange={getYearMonthChange} />
        </Box>
        <Box>
          <CreateAppointment />
        </Box>
      </Box>

      <Calendar
        popup
        localizer={localizer}
        events={appointments}
        defaultDate={byDefaultDate}
        onSelectEvent={(event) => handleOpen(event)}
        style={{ minHeight: "500px" }}
        toolbar={false}
      />

      <Details data={data} open={open} handleClose={handleClose} />
    </div>
  );
};

export default AppointmentWithRoute;
