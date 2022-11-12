import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { RemoveAd } from "../../redux/ads/adsActions";

export default function ConfirmBox({ id, open, setOpen }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClose = () => {
    setOpen(false);
  };
  const Delete = (id) => {
    axios
    .delete(` http://localhost:3000/ads/${id}`)
    .then((res) => {
      console.log(res);
      dispatch(RemoveAd(id));
      navigate("/");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are You sure to delete this Ad?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            if you confirm diologue box ad delete permanently!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              Delete(id);
              handleClose();
            }}
            autoFocus
          >
            Confirm
          </Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>

        
      </Dialog>
    </div>
  );
}
