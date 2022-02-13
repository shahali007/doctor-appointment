import React from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  MenuItem,
  TextField,
} from "@mui/material";
import moment from "moment";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";

import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import actions from "../../redux/actions";

const CreateAppointment = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [dateTime, setDateTime] = React.useState(new Date());

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const time = moment(dateTime).format("hh:mm A");
    const obj = {
      title: data.name,
      age: data.age,
      gender: data.gender,
      start: dateTime.toISOString(),
      end: dateTime.toISOString(),
      time: time,
    };
    dispatch(actions.appointments.addAppointment(obj));
    handleClose();
  };

  const handleClickOpen = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        Create Appointment
      </Button>
      <Dialog maxWidth={"xs"} open={open} onClose={handleClose}>
        <DialogTitle>Create Appointment</DialogTitle>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Box px={2}>
            <Box mb={1}>
              <TextField
                margin="dense"
                id="name"
                label="Name"
                fullWidth
                variant="outlined"
                placeholder="Name"
                size={"small"}
                error={errors.name?.type === "required" && "Name is required"}
                helperText={
                  errors.name?.type === "required" && "Name is required"
                }
                {...register("name", { required: true })}
              />
            </Box>
            <Box mb={1}>
              <TextField
                margin="dense"
                id="gender"
                select
                label="Gender"
                fullWidth
                variant="outlined"
                placeholder="Gender"
                size={"small"}
                error={
                  errors.gender?.type === "required" && "Gender is required"
                }
                helperText={
                  errors.gender?.type === "required" && "Gender is required"
                }
                {...register("gender", { required: true })}
              >
                <MenuItem value={false}>--Select--</MenuItem>
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
              </TextField>
            </Box>
            <Box mb={2}>
              <TextField
                margin="dense"
                id="age"
                label="Age"
                fullWidth
                variant="outlined"
                placeholder="Age"
                size={"small"}
                error={errors.age?.type === "required" && "Age is required"}
                helperText={
                  errors.age?.type === "required" && "Age is required"
                }
                {...register("age", { required: true })}
              />
            </Box>

            <Box>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DateTimePicker
                  renderInput={(props) => (
                    <TextField size={"small"} {...props} />
                  )}
                  label="DateTimePicker"
                  value={dateTime}
                  onChange={(newValue) => {
                    setDateTime(newValue);
                  }}
                />
              </LocalizationProvider>
            </Box>
          </Box>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit">Submit</Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
};

export default CreateAppointment;
