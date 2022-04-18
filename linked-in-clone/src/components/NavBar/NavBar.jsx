import React from "react";
import "./NavBar.scss";
import { images } from "../../constent/images";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from '@mui/icons-material/Home';
import Menu from "../../components/Menu/Menu"

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar__left">
      <img src={images.linkedin} alt="" className="navbar__image" />
      <div className="navbar__search-box">
        <SearchIcon className="searchbox-icon" />
        <input type="text" placeholder="Search" />
      </div>
      </div>
      
   
   <div className="navbar__menu">
   <Menu Icon = {HomeIcon} name = "Home"/>
      <Menu Icon = {HomeIcon} name = "My Network"/>
      <Menu Icon = {HomeIcon} name = "Jobs"/>
      <Menu Icon = {HomeIcon} name = "Messaging"/>
      <Menu Icon = {HomeIcon} name = "Notifications"/>
   </div>
     
  

    </div>
  );
};

export default NavBar;
