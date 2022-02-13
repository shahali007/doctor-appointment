import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import moment from "moment";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const Details = ({ data, open, handleClose }) => {
  const handleModalClose = () => {
    handleClose(true);
  };
  return (
    <>
      <Dialog maxWidth={"xs"} fullWidth open={open} onClose={handleModalClose}>
        <DialogTitle>Appointment</DialogTitle>
        <DialogContent>
          <TableContainer component={Paper}>
            <Table size="small" aria-label="a dense table">
              <TableBody>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Name
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {data.title}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Age
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {data.age}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Gender
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {data.gender}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Data
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {moment(data.start).format("MMM DD, YYYY")}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Time
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {data.time}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleModalClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Details;
