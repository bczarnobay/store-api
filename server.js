// const express = require("express");
// const MongoClient = require("mongodb").MongoClient;
// const bodyParser = require("body-parser");

// const app = express();
// const port = 8000;

// app.listen(port, () => {  console.log('live on ' + port);});

const express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

app.listen(port);

app.get('/', (req,res) => {
    res.send('Hello stranger')
})

console.log(' RESTful API server started on: ' + port);