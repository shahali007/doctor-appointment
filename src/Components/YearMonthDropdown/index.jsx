import React from "react";
import { MenuItem, TextField } from "@mui/material";
import { useSelector } from "react-redux";
import { months } from "../../helpers/funcations";
import { useParams } from "react-router";

const YearMonthDropdown = ({ getYearMonthChange }) => {
  const { year, month } = useParams();
  const thisDate = new Date();
  const thisYear = year
    ? new Date(year).getFullYear()
    : new Date().getFullYear();
  const thisMonth = month
    ? new Date(year + " " + month + " " + "01").getMonth()
    : new Date().getMonth();

  let url = window.location.href;
  let arr = url.split("/");
  let result = arr[0] + "//" + arr[2];

  const [filterYear, setYear] = React.useState(thisYear);
  const [filterMonth, setMonth] = React.useState(thisMonth + 1);

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

  const handleYearChange = (val) => {
    setYear(val);
    handleChangeCalendar(val, filterMonth);
    window.location.replace(result + "/year/" + val + "/month/" + filterMonth);
  };
  const handleMonthChange = (val) => {
    setMonth(val);
    handleChangeCalendar(filterYear, val);
    window.location.replace(result + "/year/" + filterYear + "/month/" + val);
  };

  const handleChangeCalendar = (a, b) => {
    getYearMonthChange(a, b);
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
        value={filterYear}
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
        value={filterMonth}
        onChange={(e) => handleMonthChange(e.target.value)}
      >
        {months &&
          months.map((item, i) => (
            <MenuItem key={item.month} value={item.month}>
              {item.name}
            </MenuItem>
          ))}
      </TextField>
    </>
  );
};

export default YearMonthDropdown;
