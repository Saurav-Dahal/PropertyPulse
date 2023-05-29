const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
app.use(cors());
app.use(bodyParser.json());
require("dotenv").config();
const mongoose = require('mongoose');

const bcrypt = require("bcrypt");
const saltRounds = 10;

const connect = require("./db/mongoose");
connect();


app.use('/api/users', require('./routes/userRoutes'));

app.use('/api/listing', require('./routes/listingRoutes'));

  
const hostname = '127.0.0.1';
const port = 3003;
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });

