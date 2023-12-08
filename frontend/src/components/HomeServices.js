import React, { useState } from "react";
import "./HomeServices.css";
import Navbar from "./Navbar";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const HomeServices = () => {
  const [trademarks, setTrademarks] = useState(["WEB", "APP", "SEO"]);
  const [blueprints, setBlueprints] = useState(["LAUNCH", "SELL", "GROW"]);
  const [displayedTrademarkIndex, setDisplayedTrademarkIndex] = useState(0);
  const [displayedBlueprintIndex, setDisplayedBlueprintIndex] = useState(0);

  const handleScrollButtonClick = () => {
    const nextTrademarkIndex =
      (displayedTrademarkIndex + 1) % trademarks.length;
    const nextBlueprintIndex =
      (displayedBlueprintIndex + 1) % blueprints.length;

    setDisplayedTrademarkIndex(nextTrademarkIndex);
    setDisplayedBlueprintIndex(nextBlueprintIndex);

    if (nextTrademarkIndex === 0 && nextBlueprintIndex === 0) {
      window.location.href = "/HomeContact";
    }
  };

  return (
    <div className="homeServices">
      <Navbar />
      <Header />
      <div className="dabba">
        <div className="left">
          <div className="inLeft">
            <h1>
              DIGITAL SOLUTIONS:
              <br />
              THE MERAKI TRADEMARK
            </h1>
            <div id="text">
              <Link to={`/ourServices/${trademarks[displayedTrademarkIndex]}`}>
                {trademarks[displayedTrademarkIndex]}
              </Link>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="inRight">
            <h1>
              BEYOND DIGITAL <br />
              THE MERAKI BLUEPRINT
            </h1>
            <div id="text">
              <Link to={`/ourServices/${blueprints[displayedBlueprintIndex]}`}>
                {blueprints[displayedBlueprintIndex]}
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer handleButtonClick={handleScrollButtonClick} />
    </div>
  );
};

export default HomeServices;
