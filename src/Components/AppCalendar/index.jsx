import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { useSelector } from "react-redux";
import CreateAppointment from "../Form";
import { Box } from "@mui/material";
import YearMonthDropdown from "../YearMonthDropdown";
import Details from "../Details";
const localizer = momentLocalizer(moment);

const AppCalendar = ({ year, month }) => {
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
  const yearMonth = (year, month) => {
    const dateTime = new Date(year + "" + month + " 01");
    console.log(dateTime);
    const ap = appointments.filter((item) => {
      return new Date(item.start).getTime() >= dateTime.getTime();
    });
    console.log(ap);
    //setAppoints(ap);
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
          <YearMonthDropdown getYearMonthChange={yearMonth} />
        </Box>
        <Box>
          <CreateAppointment />
        </Box>
      </Box>

      <Calendar
        popup
        localizer={localizer}
        events={appoins}
        defaultDate={byDefaultDate}
        onSelectEvent={(event) => handleOpen(event)}
        style={{ minHeight: "500px" }}
        toolbar={false}
      />

      <Details data={data} open={open} handleClose={handleClose} />
    </div>
  );
};

export default AppCalendar;
