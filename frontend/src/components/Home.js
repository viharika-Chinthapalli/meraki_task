import React from "react";
import Header from "./Header";
import "./Home.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
 
const Home = () => {
  const navigate = useNavigate();
  const handleScrollButtonClick = () => {
    navigate("/services");
  }
  return (
    <div className="home"> 
      <Navbar />
      <div className="divv">
        <Header />
        <div className="hero">
          <p>MERAKI</p>
        </div>
        <div className="footer">
          <div className="frst-container">
            <div className="box">
              <h1>DESIGN + DEVELOPMENT</h1>
            </div>
            <div className="box box-2">
              <p>MERAKI IS MORE THAN JUST A TECH HUB.</p>
              <p>
                IMMERSE YOURSELF IN A SPACE WHERE CUSTOM WEB DESIGNS MEET
                E-COMMERCE, INNOVATIVE APPS, AND STRATEGIC BUSINESS DEVELOPMENT.
              </p>
              <p>EXPERIENCE THE MERAKI METAMORPHOSIS.</p>
            </div>
            <div className="box">
              <h2>
                30+
                <br />
                PROJECTS
              </h2>
            </div>
          </div>
        </div>
        <Footer handleButtonClick={handleScrollButtonClick} />
      </div>
    </div>
  );
};

export default Home;
