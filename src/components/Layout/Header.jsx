import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiSun } from "react-icons/bi";
import { BiMoon } from "react-icons/bi";
import { BsPlusCircleDotted } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { useSelector } from "react-redux";
import { ThemeContext } from "../context/themeContext";

const Header = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();

  return (
    <header className={`header ${darkMode&&"dark"}`}>
      <div className="logoContainer">
        <img src="images/darkLogo.png" alt="logo" />
      </div>
      <nav className="navMenu">
        <div
          onClick={() => {
            setDarkMode((preveState) => !preveState);
          }}
          className="changeThemeBtns"
        >
          <span className="ball"></span>
          <BiSun className="sun" />
          <BiMoon className="moon" />
        </div>
        <div className="headerMenu">
          {user.email ? (
            <BsPlusCircleDotted
              onClick={() => {
                navigate("/create");
              }}
              className="addBtn"
            />
          ) : (
            <>
              <Link to="/auth">Register</Link>
              <Link to="/auth">Login</Link>
            </>
          )}
        </div>
        <FaBars className="bars" />
      </nav>
    </header>
  );
};

export default Header;
