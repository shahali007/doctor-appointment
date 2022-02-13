import * as React from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";

export default function BasicDateTimePicker() {
  const [value, setValue] = React.useState(new Date());

  const handleChange = (val) => {
    setValue(val);
    console.log("val", val);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateTimePicker
        renderInput={(props) => <TextField {...props} />}
        label="DateTimePicker"
        value={value}
        onChange={(newValue) => {
          handleChange(newValue);
        }}
      />
    </LocalizationProvider>
  );
}
