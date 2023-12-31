const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
require("dotenv").config();

const pool = mysql.createPool({
  connectionLimit: 100,
  host: "127.0.0.1",
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: "contactdetails",
  port: 3306,
});

app.post("/contactdetails", (req, res) => {
  console.log("Received request for /contactdetails");
  console.log("Request Body:", req.body);

  pool.getConnection((err, connection) => {
    if (err) {
      console.error("Error getting MySQL connection:", err);
      return res.status(500).json({ error: "Error connecting to the database" });
    }

    const sql =
      "INSERT INTO contact (`name`, `email`, `message`) VALUES (?, ?, ?)";
    const values = [req.body.name, req.body.email, req.body.message];

    console.log("SQL Query:", sql, values);

    connection.query(sql, values, (err, data) => {
      connection.release();

      if (err) {
        console.error("MySQL query error:", err);
        return res.status(500).json({ error: "Internal Server Error" });
      }

      console.log("Inserted data:", data);
      return res.json(data);
    });
  });
});

app.post("/contact", (req, res) => {
  console.log("Received request for /contact");
  console.log("Request Body:", req.body);

  pool.getConnection((err, connection) => {
    if (err) {
      console.error("Error getting MySQL connection:", err);
      return res.status(500).json({ error: "Error connecting to the database" });
    }

    const sql =
      "INSERT INTO contactpage (`name`, `email`, `message`) VALUES (?, ?, ?)";
    const values = [req.body.name, req.body.email, req.body.message];

    console.log("SQL Query:", sql, values);

    connection.query(sql, values, (err, data) => {
      connection.release();

      if (err) {
        console.error("MySQL query error:", err);
        return res.status(500).json({ error: "Internal Server Error" });
      }

      console.log("Inserted data:", data);
      return res.json(data);
    });
  });
});

app.listen(8080, () => {
  console.log("Server is listening on port 8080...");
});
