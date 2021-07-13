const express = require("express");
const session = require('express-session');
const MongoStore = require('connect-mongo');
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require('./routes')

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/replay", {
  useUnifiedTopology: true
});

const options = {
  mongoUrl: process.env.MONGODB_URI || "mongodb://localhost/replay"
};

app.use(session({
  secret: 'foo',
  store: MongoStore.create(options)
}));

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);


// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
