import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Tooltip from "@mui/material/Tooltip";
import efsl from "../assets/images/fsllogo.png";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const Navigate = useNavigate();
  const handleLoginClick = () => {
    Navigate("/login"); // For User Dashboard
    //Navigate('/Dashboard');   // for Admin Dashboard
  };

  return (
    <nav
      class="navbar navbar-expand-lg"
      style={{ backgroundColor: "#248888", color: "#fff" }}
    >
      <div class="container">
        <img src={efsl} alt="" style={{ width: "246px" }} />
        <Tooltip title="LOGIN">
          <button
            className="btn"
            style={{ color: "white" }}
            onClick={handleLoginClick}
          >
            <AccountCircleIcon fontSize="large" />
          </button>
        </Tooltip>
      </div>
      <div>
        <div className="row m-3"></div>
      </div>
    </nav>
  );
};

export default Header;
