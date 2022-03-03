const express = require("express");
const cors = require("cors");
const app = express();
const setupContactRoutes = require("./app/routes/contact.routes");
const { BadRequestError, errorHandler } = require("./app/errors");


app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true}));

app.get("/", (req, res )=>{
    res.json({ messgae:"Welcome to contact book application"});
});



setupContactRoutes(app);
module.exports = app;