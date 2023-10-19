import React from "react";
import logo from "../../assets/logo.png";
import menuopen from "../../assets/icons8-menu-50.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <img className="w-[100px]" src={logo} alt="logo" />
      <div className="flex justify-center items-center gap-x-16 navbar">
        <div>Services</div>
        <div>Reviews</div>
        <div>About Us</div>
        <div>Blog</div>
      </div>
      <div className="bg-[#CCFD01] text-black rounded-full px-6 py-2 cursor-pointer primary-btn">
        Contact Us
      </div>
      <img className="lg:hidden menu-open text-white" src={menuopen} alt="" />
    </div>
  );
};

export default Navbar;
