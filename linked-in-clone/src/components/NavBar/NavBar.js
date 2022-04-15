import React from "react";
import "./NavBar.scss";
import { images } from "../../constent/images";
import SearchIcon from "@mui/icons-material/Search";

const NavBar = () => {
  return (
    <div className="navbar">
      <img src={images.linkedin} alt="" className="navbar__image" />
      <div className="navbar__search-box">
        <SearchIcon className="searchbox-icon" />
        <input type="text" />
      </div>
    </div>
  );
};

export default NavBar;
