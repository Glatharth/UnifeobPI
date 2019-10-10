
const {connect} = require('./controller/db/connectDB');
const express       = require('express');
const app           = express();
const bodyParser    = require('body-parser');

connect();

// Body Parser
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());