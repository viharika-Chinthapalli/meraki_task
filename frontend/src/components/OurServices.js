import React, { useEffect, useState } from "react";
import "./OurServices.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import logo from "../assests/TMS-logo-green 1.png";
import { useLocation } from "react-router-dom";

const OurServices = () => {
  const { pathname } = useLocation();
  const services = ["WEB", "LAUNCH", "APP", "SELL", "SEO", "GROW"];
  const initialIndex = services.indexOf(pathname.split("/").pop());
  const [currentIndex, setCurrentIndex] = useState(
    initialIndex >= 0 ? initialIndex : 0
  );
  const [content, setContent] = useState({});
  const [activeListItem, setActiveListItem] = useState(0);

  useEffect(() => {
    const currentService = services[currentIndex];
    let newContent = {};

    if (currentService === "WEB") {
      newContent = {
        header: "WEB",
        paragraphs: [
          "OUR TEAM EXCEL IN DESIGNING AND DEVELOPING USER-FRIENDLY SITES.",
          "WE APPLY ADVANCED METHODS AND TECHNOLOGIES TO CURATE QUICK, POTENT, AND EFFECTIVE WEBSITES.",
          "WE FOCUS ON WHAT YOU NEED.",
        ],
        listItems: [
          "E-COMMERCE WEBSITE",
          "LANDING PAGE",
          "WEB APPLICATION",
          "PROMO SITE",
          "CORPORATE SITE",
        ],
      };
    } else if (currentService === "LAUNCH") {
      newContent = {
        header: "LAUNCH",
        paragraphs: [
          "START SMART WITH MERAKI.",
          "WE GUIDE YOU STEP-BY-STEP THROUGH THE LAUNCH OF YOUR BUSINESS. WE PROVIDE ESSENTIAL TOOLS AND KNOW-HOW TO SET YOU UP FOR SUCCESS.",
          "FROM INITIAL IDEA TO OPENING DAY, WE'RE WITH YOU ALL THE WAY. WE MAKE SURE YOUR BUSINESS GETS OFF TO A FLYING START.",
        ],
        listItems: [
          "BUSINESS PLAN GUIDANCE",
          "MARKET RESEARCH",
          "BRAND CREATION",
          "MARKETING STRATEGY",
          "POST-LAUNCH SUPPORT",
        ],
      };
    } else if (currentService === "APP") {
      newContent = {
        header: "MOBILE",
        paragraphs: [
          "OUR TEAM CRAFTS EXCEPTIONAL MOBILE APP DESIGNS,  NO MATTER HOW INTRICATE THE REQUIREMENTS.",
          "WE TAKE A HOLISTIC APPROACH TO YOUR APP’S DESIGN DELIVERING WELL-CONSIDERED LAYOUTS THAT ADHERE TO MODERN UI STANDARDS.",
        ],
        listItems: [
          "IOS APPLICATION",
          "ANDROID APPLICATION",
          "SAAS AND MICRO SAAS APPLICATION",
          "MULTI PLATFORM",
        ],
      };
    } else if (currentService === "SELL") {
      newContent = {
        header: "SELL",
        paragraphs: [
          "SELL MORE WITH MERAKI.",
          "WE GIVE YOU THE TOOLS TO MAKE SALES SOAR. FROM ONLINE STORES TO IN-PERSON SALES, WE HAVE YOU COVERED.",
          "WE HELP YOU CONNECT WITH CUSTOMERS AND CLOSE DEALS. SIMPLE, FAST, EFFECTIVE.",
        ],
        listItems: [
          "SALES STRATEGY",
          "E-COMMERCE SETUP",
          "LEAD GENERATION",
          "CUSTOMER ENGAGEMENT",
          "PAYMENT SOLUTIONS",
          "INVENTORY MANAGEMENT",
          "SALES ANALYTICS",
        ],
      };
    } else if (currentService === "SEO") {
      newContent = {
        header: "SEO",
        paragraphs: [
          "OUR TEAM  CURATE TAILORED SEO SOLUTIONS, SUITABLE FOR ANY BUSINESS SCOPE.",
          "WE HANDLE EVERY FACET OF YOUR SITE’S SEARCH PRESSENCE, GIVING YOU A ROBUST SEO BLUEPRINT COMPLIANT WITH THE LATEST STARDARDS.",
        ],
        listItems: [
          "ON-PAGE OPTIMIZATION",
          "OFF-PAGE OPTIMIZATION",
          "LOCAL SEO STRATEGIES",
          "KEYWORD RESEARCH",
        ],
      };
    } else if (currentService === "GROW") {
      newContent = {
        header: "GROW",
        paragraphs: [
          "GROW BIG WITH MERAKI.",
          "WE DON'T JUST HELP YOU START OR SELL—WE HELP YOU SCALE.",
          "WE PROVIDE THE STRATEGIES AND TOOLS YOU NEED TO EXPAND YOUR REACH AND GROW YOUR PROFITS.",
        ],
        listItems: [
          "GROWTH  STRATEGY",
          "MARKET EXPANSION",
          "TEAM BUILDING",
          "PRODUCT DIVERSIFICATION",
          "REVENUE OPTIMIZATION",
          "CUSTOMER RETENTION",
          "ADVANCED ANALYTICS",
        ],
      };
    }
    setContent(newContent);
  }, [currentIndex]);

  const handleButtonClick = () => {
    setActiveListItem((prev) => (prev + 1) % 3);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
  };
  return (
    <div className="ourServices">
      <Navbar />
      <div className="header">
        <div>
          <img src={logo} alt="Header Image" />
        </div>
        <div className="h1">
          <h1>SERVICES</h1>
        </div>
        <div>
          <h1>{content.header}</h1>
        </div>
        <div>
          <button id="hir">HIRE US</button>
        </div>
      </div>
      <div className="binder">
        <div className="body">
          <div className=" b1">
            <ul>
              <li className={activeListItem === 0 ? "active" : ""}></li>
              <li className={activeListItem === 1 ? "active" : ""}></li>
              <li className={activeListItem === 2 ? "active" : ""}></li>
            </ul>
          </div>
          <div className="body2">
            <div className="serv b2">
              <div className="b21">
                {content.paragraphs &&
                  content.paragraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
              </div>
              <div>
                <button onClick={handleButtonClick}>SCROLL DOWN</button>
              </div>
            </div>
            <div className=" b3">
              <ul>
                {content.listItems &&
                  content.listItems.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OurServices;
