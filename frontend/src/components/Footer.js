import React, { useState } from "react";
import "./Footer.css";

const Footer = ({ handleButtonClick: parentHandleButtonClick }) => {
  const [activeListItem, setActiveListItem] = useState(0);

  const handleButtonClick = () => {
    setActiveListItem((prev) => (prev + 1) % 3);
    // Call the parent component's handleButtonClick if it exists
    if (typeof parentHandleButtonClick === "function") {
      parentHandleButtonClick();
    }
  };

  return (
    <div className="foot">
      <div className="f1">
        <p>SOCIAL:</p>
        <p>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            /FACEBOOK
          </a>
        </p>
        <p>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            /INSTAGRAM
          </a>
        </p>
        <p>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            /LINKEDIN
          </a>
        </p>
      </div>
      <div className="f1 box1">
        <div id="btn">
          <button onClick={handleButtonClick}>SCROLL DOWN</button>
        </div>
        <div className="lists">
          <ul>
            <li className={activeListItem === 0 ? "active" : ""}></li>
            <li className={activeListItem === 1 ? "active" : ""}></li>
            <li className={activeListItem === 2 ? "active" : ""}></li>
          </ul>
        </div>
      </div>
      <div className="f1 base">
        <div className="b2024">2024</div>
        <div>THE MERAKI STUDIO</div>
      </div>
    </div>
  );
};

export default Footer;
