const express = require("express");
const bodyParser = require('body-parser');
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
const User = require("./userModel");

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
};

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); 

app.post('/api/user/signup', (req, res)=>{
  console.log('user sign up route hit')
  const user = new User({
    email: req.body.email,
    username: req.body.username, 
    password: req.body.password
  }).save((err, response)=>{
    if(err) res.status(400).send(err)
    res.status(200).send(response)
  })

  })

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});




// connect to the Mongoose DB

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/bluedream");

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});


