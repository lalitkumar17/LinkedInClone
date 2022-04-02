import React from "react";
import "./NavBar.scss";
import { images } from "../../constent/images";

const NavBar = () => {
  return (
    <div className="navbar">
      <img src={images.linkedin} alt="" className="navbar__image" />
    </div>
  );
};

export default NavBar;
