const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
require("dotenv").config();

const db = mysql.createConnection({
  host: "localhost",
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: "contactdetails",
});

db.connect((err) => {
  if (err) {
    console.error("MySQL Connection Error:", err);
  } else {
    console.log("Connected to MySQL database");
  }
});

app.post("/contactdetails", (req, res) => {
  if (!req.body.name || !req.body.email || !req.body.message) {
    console.log("Fields are empty");
    return res.status(400).json("Fields are empty");
  }
  const sql =
    "INSERT INTO contact (`name`, `email`, `message`) VALUES (?, ?, ?)";
  const values = [req.body.name, req.body.email, req.body.message];
  console.log("Values:", values);
  db.query(sql, values, (err, data) => {
    if (err) {
      console.error("Error:", err);
      return res.json("ERROR");
    }
    console.log("Inserted data:", data);
    return res.json(data);
  });
});

app.post("/contact", (req, res) => {
  if (!req.body.name || !req.body.email || !req.body.message) {
    console.log("Fields are empty");
    return res.status(400).json("Fields are empty");
  }
  const sql =
    "INSERT INTO contactpage (`name`, `email`, `message`) VALUES (?, ?, ?)";
  const values = [req.body.name, req.body.email, req.body.message];
  console.log("Values:", values);
  db.query(sql, values, (err, data) => {
    if (err) {
      console.error("Error:", err);
      return res.json("ERROR");
    }
    console.log("Inserted data:", data);
    return res.json(data);
  });
});

app.listen(8080, () => {
  console.log("Listening...");
});
