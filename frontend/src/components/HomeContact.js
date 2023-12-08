import React, { useState } from "react";
import "./HomeContact.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";

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
        .post(`${process.env.REACT_APP_API_URL}/contactdetails`, {
          name,
          email,
          message,
        })
        .then((res) => console.log("Submitted Successfully!!"))
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="contact">
      <Navbar />
      <div className="contactDabb">
        <div className="leftC">
          <h1>SEND US A REQUEST TO CREATE UNIQUE PROJECT FOR YOU</h1>
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
      <Footer />
    </div>
  );
};

export default Contact;
