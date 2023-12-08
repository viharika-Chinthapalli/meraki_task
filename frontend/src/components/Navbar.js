import React, { useEffect } from "react";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  useEffect(() => {
    const activePage = location.pathname;
    const navLinks = document.querySelectorAll("#links a");

    navLinks.forEach((link) => {
      const linkPath = link.getAttribute("href");

      if (
        (activePage === "/" && linkPath === "/") ||
        (activePage !== "/" &&
          linkPath !== "/" &&
          activePage.includes(linkPath))
      ) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }, [location.pathname]);

  return (
    <div className="nav">
      <ul id="links">
        <li>
          <Link to="/">HOMEPAGE</Link>
        </li>
        <li>
          <Link to="/works">WORKS</Link>
        </li>
        <li>
          <Link to="/services">SERVICES</Link>
        </li>
        <li>
          <Link to="/contact">CONTACT</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
