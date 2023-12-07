import React from "react";
import "./Header.css";
import logo from "../assests/TMS-logo-green 1.png";
import { useNavigate } from "react-router-dom";
  
const Header = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/contact');
  }
  return (
    <div className="conta">
      <div>
        <img src={logo} alt="Header Image" className="logo"/>
      </div> 
      <div>
        <button id="hire" onClick={handleSubmit}>HIRE US</button>
      </div>
    </div>
  );
};

export default Header;
