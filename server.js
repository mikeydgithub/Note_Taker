// require express package
const express = require("express");

// setting port
const PORT = process.env.PORT || 3001;

// app express middlewear
const app = express();

// setup api routes
const apiRoutes = require("./routes/apiroutes");

// setup html routes
const htmlRoutes = require("./routes/htmlroutes");

// parses incoming requests
app.use(express.urlencoded({ extend: true }));
app.use(express.json());

// to serve static files like pictures
app.use(express.static("public"));

// route endpoints
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

//port listen
app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});