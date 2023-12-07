import React, { useState } from "react";
import "./Contact.css";
import "./Footer.css";
import axios from "axios";
import logo from "../assests/TMS-logo-green 1.png";
import Navbar from "./Navbar";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const validateForm = () => {
    let valid = true;
    const newErrors = { name: "", email: "", message: "" };

    // Validate name
    if (!name.trim()) {
      newErrors.name = "REQUIRED";
      valid = false;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email)) {
      newErrors.email = "REQUIRED";
      valid = false;
    }

    // Validate message
    if (!message.trim()) {
      newErrors.message = "REQUIRED";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Clear the error for the corresponding field when the user starts typing
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));

    // Update the state for the corresponding field
    if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "message") {
      setMessage(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Name:", name);
      console.log("Email:", email);
      console.log("Message:", message);

      setName("");
      setEmail("");
      setMessage("");

      axios
        .post("http://localhost:8080/contact", { name, email, message })
        .then((res) => console.log("Submitted Successfully!!"))
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="contact">
      <Navbar />
      <div className="container">
        <div>
          <img src={logo} alt="Header Image" />
        </div>
        <div>
          <h1>CONTACT</h1>
        </div>
      </div>
      <div className="contactDabba">
        <div className="leftC">
          <div className="l1 l">
            <p>WORK EMAIL:</p>
            <h3>HELLO@THEMERAKISTUDIO.CO</h3>
          </div>
          <div className="l2 l">
            <p>SALES EMAIL:</p>
            <h3>HIRE@THEMERAKISTUDIO.CO</h3>
          </div>
          <div className="l3 l">
            <p>OUR SOCIALS:</p>
            <h3>
              <p className="socials">LINKEDIN</p>
              <p>FACEBOOK</p>
              <p>INSTAGRAM</p>
            </h3>
          </div>
        </div>
        <div className="rightC">
          <div className="inRightC">
            <h6>
              GET IN TOUCH TODAY - WE’RE AT YOUR SERVICE. DROP A NOTE, AND WE’LL
              GET BACK TO YOU PROMPTLY
            </h6>
            <div className="form">
              <form onSubmit={handleSubmit} encType="application/json">
                <div className="form-group">
                  <hr />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={handleInputChange}
                    placeholder="NAME"
                  />
                  <div className="error">{errors.name}</div>
                </div>

                <div className="form-group">
                  <hr />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={handleInputChange}
                    placeholder="EMAIL"
                  />
                  <div className="error">{errors.email}</div>
                </div>

                <div className="form-group">
                  <hr />
                  <input
                    id="message"
                    name="message"
                    value={message}
                    onChange={handleInputChange}
                    placeholder="MESSAGE"
                  />
                  <div className="error">{errors.message}</div>
                  <hr />
                </div>

                <input id="submit" name="submit" value="SUBMIT" type="submit" />
              </form>
            </div>
          </div>
        </div>
      </div> 
      <div className="foot">
        <div className="f1">
          <p>A MATTER OF LIFE AND DEATH? WRITE US HERE:</p>
        </div>
        <div className="f1">
          <div className="b2024">2024</div>
          <div>THE MERAKI STUDIO</div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
