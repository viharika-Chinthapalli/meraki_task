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
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const validateForm = () => {
    let valid = true;
    const newErrors = { name: "", email: "", message: "" };

    if (!name.trim()) {
      newErrors.name = "REQUIRED";
      valid = false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email)) {
      newErrors.email = "REQUIRED";
      valid = false;
    }
    if (!message.trim()) {
      newErrors.message = "REQUIRED";
      valid = false;
    }
    setErrors(newErrors);
    return valid;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
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
        .post(`${process.env.REACT_APP_API_URL}/contact`, {
          name,
          email,
          message,
        })
        .then((res) => {
          console.log("Submitted Successfully!!");
          setSubmissionStatus("success");
        })
        .catch((err) => {
          console.log(err);
          setSubmissionStatus("error");
        });
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
        <div className="leftCC">
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
        <div className="rightCC">
          <div className="inRightC">
            <h6>
              GET IN TOUCH TODAY - WE’RE AT YOUR SERVICE. DROP A NOTE, AND WE’LL
              GET BACK TO YOU PROMPTLY
            </h6>
            {submissionStatus === "success" && (
              <div className="success-message">
                Form submitted successfully!
              </div>
            )}
            {submissionStatus === "error" && (
              <div className="error-message">
                Error submitting the form. Please try again later.
              </div>
            )}
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
