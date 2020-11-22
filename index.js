const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');

require('dotenv').config();

const app = express();
// app.use(cors());
app.use(cors());

  
const mongoURL = process.env.DB_URL;
mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true }).catch((err)=>{
    console.log(err);
});
let db = mongoose.connection;
db.once('open', () => console.log("Connected to mongo database"));
db.on('error', console.error.bind(console, "MongoDB connection error: "));

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: false}));

app.use(logger('dev'));

module.exports = app;