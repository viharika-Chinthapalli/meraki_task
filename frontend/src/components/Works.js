import React from "react";
import "./Works.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import logo from "../assests/TMS-logo-green 1.png";
import img1 from "../assests/Rectangle 14.png";
import img2 from "../assests/Screenshot 2023-09-29 at 10.58 1.png";
import img3 from "../assests/Rectangle 20.png";
import img4 from "../assests/Rectangle 9.png";

const Works = () => {
  return (
    <div className="works">
      <Navbar />
      <div className="w1">
        <div className="navigation">
          <div>
            <img src={logo} alt="Header Image" />
          </div>
          <div className="h1">
            <h1>WORKS</h1>
          </div>
          <div>
            <button id="hire">HIRE US</button>
          </div>
        </div>

        <div className="wbody">
          <div className="row">
            <div className="r1">DESIGN & DEV</div>
            <div className="r2">
              <h1>CENTRE D’AMITIÉ</h1>
              <p>FAVOURITE #5</p>
              <p>NON-PROFIT ORGANISATION</p>
              <div>
                <img src={img2} alt="img2"></img>
                <button className="butn">VIEW</button>
              </div>
            </div>
            <div className="img">
              <img src={img1} alt="img1" />
            </div>
          </div>
          <div className="row">
            <div className="img">
              <img src={img4} alt="img4" />
            </div>

            <div className="r3">
              <h1>GML SEAFOOD</h1>
              <p>FAVOURITE #4</p>
              <p>SEAFOOD SUPPLIER</p>
              <div>
                <button className="btn1">VIEW</button>
                <img src={img2} alt="img2"></img>
              </div>
            </div>
            <div className="r1">DESIGN & DEV</div>
          </div>
          <div className="row">
            <div className="r1">DESIGN & DEV</div>
            <div className="r2">
              <h1>BELINDA TOURS</h1>
              <p>FAVOURITE #3</p>
              <p>BOAT CRUISES</p>
              <div>
                <img src={img2} alt="img2"></img>
                <button className="butn">VIEW</button>
              </div>
            </div>
            <div className="img">
              <img src={img3} alt="img3" />
            </div>
          </div>
          <div className="row">
            <div className="img">
              <img src={img3} alt="img3" />
            </div>

            <div className="r3">
              <h1>LEAVE BLANK</h1>
              <p>FAVOURITE #2</p>
              <p>LOREM IPSUM</p>
              <div>
                <button className="btn1">VIEW</button>
                <img src={img2} alt="img2"></img>
              </div>
            </div>
            <div className="r1">DESIGN & DEV</div>
          </div>
          <div className="row">
            <div className="r1">DESIGN & DEV</div>
            <div className="r2">
              <h1>LEAVE BLANK</h1>
              <p>FAVOURITE #1</p>
              <p>LOREM IPSUM</p>
              <div>
                <img src={img2} alt="img2"></img>
                <button className="butn">VIEW</button>
              </div>
            </div>
            <div className="img">
              <img src={img3} alt="img3" />
            </div>
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default Works;
