import React from "react";
import { MenuItem, TextField } from "@mui/material";
import { useSelector } from "react-redux";
import { months } from "../../helpers/funcations";

const YearMonthDropdown = ({ getYearMonthChange }) => {
  const thisDate = new Date();
  const thisYear = new Date(thisDate).getFullYear();
  const thisMonth = new Date(thisDate).getMonth();

  const { appointments } = useSelector((state) => state.appointments);
  const apYear = [];

  appointments &&
    appointments.map((ap, i) => {
      const stDate = ap.start;
      apYear.push(new Date(stDate).getFullYear());
      return ap;
    });

  const uniqueYear = apYear.filter(
    (item, index) => apYear.indexOf(item) === index
  );

  const [year, setYear] = React.useState(thisYear);
  const [month, setMonth] = React.useState(thisMonth + 1);
  const handleYearChange = (val) => {
    setYear(val);
    handleChangeCalendar();
  };
  const handleMonthChange = (val) => {
    setMonth(val);
    handleChangeCalendar();
  };

  const handleChangeCalendar = () => {
    getYearMonthChange(year, month);
  };

  return (
    <>
      <TextField
        margin="dense"
        id="year"
        select
        label="Year"
        variant="outlined"
        placeholder="Year"
        size={"small"}
        value={year}
        onChange={(e) => handleYearChange(e.target.value)}
      >
        {uniqueYear &&
          uniqueYear.map((item, i) => (
            <MenuItem key={i} value={item}>
              {item}
            </MenuItem>
          ))}
      </TextField>
      <TextField
        margin="dense"
        id="month"
        select
        label="Month"
        variant="outlined"
        placeholder="Month"
        size={"small"}
        value={month}
        onChange={(e) => handleMonthChange(e.target.value)}
      >
        {months &&
          months.map((item, i) => (
            <MenuItem key={i} value={item.month}>
              {item.name}
            </MenuItem>
          ))}
      </TextField>
    </>
  );
};

export default YearMonthDropdown;
