const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
res.send("Server working");
});

app.listen(3000,()=>{
console.log("Server running at http://localhost:3000");
});