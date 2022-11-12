import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Box from "@mui/material/Box";
import DialogTitle from "@mui/material/DialogTitle";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TextField from "@mui/material/TextField";
import { validate } from "../../helpers/functions";
import { Typography } from "@mui/material";
import MapTwo from "../map/maptwo";
import { useDispatch, useSelector } from "react-redux";
import { editAd } from "../services/api";

export default function Modal({ data, open, setOpen }) {
  const dispatch = useDispatch();
  const { phone, description, address, id, coordinate } = data;
  const [position, setPosition] = useState(coordinate);
  const [phoneState, setPhone] = useState(phone);
  const [descState, setDesc] = useState(description);
  const [addressState, setAddress] = useState(address);
  const user = useSelector((state) => state.user.user);

  const [error, setError] = useState("");
  const cleareInputs = () => {
    setPhone(phone);
    setAddress(address);
    setDesc(description);
    setPosition(coordinate);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Edit Ad"}</DialogTitle>
        <DialogContent>
          <Box component="div" style={{ width: "400px", height: "250px" }}>
            <MapTwo coordinate={position} setCoordinate={setPosition} />
          </Box>
          <Box component="form" sx={{ padding: "1rem" }}>
            <TextField
              value={phoneState}
              label="Phone"
              fullWidth
              variant="filled"
              sx={{ marginTop: "10px" }}
              onChange={(e) => {
                setPhone(e.target.value);
                validate(phoneState, addressState, descState, setError);
              }}
            />

            <TextField
              value={addressState}
              label="address"
              multiline
              fullWidth
              minRows={4}
              variant="filled"
              sx={{ marginTop: "7px" }}
              onChange={(e) => {
                setAddress(e.target.value);
                validate(phoneState, addressState, descState, setError);
              }}
            />

            <TextField
              value={descState}
              label="Desc"
              variant="filled"
              multiline
              fullWidth
              minRows={4}
              sx={{ marginTop: "7px" }}
              onChange={(e) => {
                setDesc(e.target.value);
                validate(phoneState, addressState, descState, setError);
              }}
            />
            <Typography
              sx={{ color: "red", fontWeight: "bold", marginTop: "7px" }}
            >
              {error}
            </Typography>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              handleClose();
              if (validate(phoneState, addressState, descState, setError)) {
                editAd(
                  id,
                  phoneState,
                  descState,
                  addressState,
                  position,
                  user.email,
                  dispatch
                );
              }
            }}
            autoFocus
          >
            Submit
          </Button>
          <Button
            onClick={() => {
              handleClose();
              cleareInputs();
            }}
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>

      <ToastContainer position="top-right" />
      <ToastContainer />
    </div>
  );
}
