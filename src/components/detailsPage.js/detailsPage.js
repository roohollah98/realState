import axios from "axios";
import React, { useEffect, useState,useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Map from "../map/staticmap";
import "./details.css";
import img from "../../assets/images/log1.svg";
import ConfirmBox from "./confirmBox";
import { Button } from "@mui/material";
import Modal from "./Modal";
import { ThemeContext } from "../context/themeContext";
import BackBtn from "../button/backBtn";
import { fetchAd } from "../services/api";
const DetailsPage = () => {
  const { darkMode } = useContext(ThemeContext);

  const { id } = useParams();
  const dispatch = useDispatch();
  const selectedData = useSelector((state) => state.ads.selected);
  const [open, setOpen] = useState(false);
  const [openModal,setOpenModal]=useState(false);
  const user = useSelector((state) => state.user.user);
  console.log(user);

  
  useEffect(() => {
   
    fetchAd(id,dispatch);
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickOpenModal=()=>{
    setOpenModal(true);
  }
  return (
    <div className={`detailsContainer ${darkMode &&"dark"}`}>
      <div className="left">
        <div className="top">
          <figure>
            <img src={img} />
          </figure>
          <h2>Informatio About Home</h2>
        </div>

        <p className="desc">
          <span>Description: </span>
          {selectedData.description}
        </p>
        <p>
          <span>Address: </span>
          {selectedData.address}
        </p>
        <p>
          <span>phone: </span>
          {selectedData.phone}
        </p>
        <p>
          <span>email: </span>
          {selectedData.email}
        </p>
      </div>
      <div className="right">
        <div className="mapContainer">
          <Map coordinate={selectedData.coordinate} />
        </div>

        <div className="Btns">
          {selectedData.email === user.email && (
            <>
              <Modal data={selectedData} open={openModal} setOpen={setOpenModal}/>
              <ConfirmBox id={selectedData.id} open={open} setOpen={setOpen} />
              <Button variant="contained" onClick={handleClickOpen}>
                Delete
              </Button>
              <Button variant="contained" onClick={handleClickOpenModal}>
                Edit
              </Button>
            </>
          )}
        </div>
      </div>
      <BackBtn/>
    </div>
  );
};

export default DetailsPage;
