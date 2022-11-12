import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { validate } from "../../helpers/functions";
import { CreateAd } from "../../redux/ads/adsActions";
import BackBtn from "../button/backBtn";
import EditableMap from "../map/editableMap";

//style
import "./createAds.css";

export default function CreateAdsPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);

  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");
  const [description, setDescription] = useState("");
  const [coordinate, setCoordinate] = useState({
    lat: 51.51621757592263,
    lng: -0.11760255958339627,
  });

  const create = () => {
    axios
      .post(" http://localhost:3000/ads", {
        phone: phone,
        address: address,
        description: description,
        email: user.email,
        coordinate: coordinate,
      })
      .then((res) => {
        dispatch(CreateAd(res.data));
        navigate("/");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="CreateAdsContainer">
      <div className="CreateAdsLeft">
        <form className="createAdsForm">
          <input
            onChange={(e) => {
              setPhone(e.target.value);
              validate(phone, address, description, setError);
            }}
            value={phone}
            type="text"
            placeholder="phone"
          />
          <textarea
            maxLength={200}
            onChange={(e) => {
              setAddress(e.target.value);
              validate(phone, address, description, setError);
            }}
            value={address}
            type="text"
            placeholder="address"
          />
          <textarea
            maxLength={200}
            onChange={(e) => {
              setDescription(e.target.value);
              validate(phone, address, description, setError);
            }}
            value={description}
            type="text"
            placeholder="description"
          />
          <p style={{ color: "red", margin: "10px 0", fontWeight: "bold" }}>
            {error}
          </p>
          <button
            className="createAdBtn"
            onClick={(e) => {
              e.preventDefault();
              if (validate(phone, address, description, setError)) {
                console.log("create");
                create();
              }
            }}
          >
            Create
          </button>
        </form>
      </div>
      <div className="CreateAdsRight">
        <EditableMap coordinate={coordinate} setCoordinate={setCoordinate} />
      </div>

      <BackBtn />
    </div>
  );
}
