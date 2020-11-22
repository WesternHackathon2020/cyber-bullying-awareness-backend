const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');

require('dotenv').config();

const app = express();
// app.use(cors());
app.use(cors({
    origin: [
      'http://localhost:9080',
      'https://localhost:3000',
      'http://192.168.1.167:9080',
      'http://192.168.1.167:3000',
      'http://192.168.0.121:3000',
      'http://192.168.0.121:9080',
  
      'http://localhost:8000',
      'http://192.168.0.121:8000',
      '*',
    ],
    credentials: true,
    exposedHeaders: ['set-cookie']
  }));

  
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