require('dotenv').config();
const mongoose = require('mongoose');
const url = process.env.DB_CONNECT;

function connect() {
    mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}).then
    (
        () => { console.log("DB connected");},
        err => {  console.log(err); }
    );
    mongoose.set('useCreateIndex', true);
}

module.exports = {
    connect
};