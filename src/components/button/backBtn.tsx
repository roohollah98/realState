import React from "react";
import {MdArrowBack} from "react-icons/md";
import { useNavigate } from "react-router-dom";
import "./btn.css";
const BackBtn = () => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate("..");
      }}
      className="backBtnContainer"
    >
      <MdArrowBack />
    </div>
  );
};

export default BackBtn;
