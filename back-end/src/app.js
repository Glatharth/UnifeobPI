require('dotenv').config();
const {connect}     = require('./controller/db/connectDB');
const express       = require('express');
const app           = express();
const bodyParser    = require('body-parser');
const cors          = require('cors');
const routes        = require('./routes');

app.use(cors());

//Connect Database
// connect();

// Body Parser
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.use(express.json());
app.use(routes);

app.listen(process.env.SERVER_PORT || 3333);