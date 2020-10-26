// filename: index.js

// import express
let express = require('express');

// import routes
let apiRoutes = require("./DataSiswa");

// initiate app
let app = express();

// setup server port 8080
var port = process.env.PORT || 8080;

// send message for default URL
app.get('/', (req,res) => res.send("Selamat Datang Di Data Center Siswa Indonesia"));

// app apiRoutes
app.use('/DataSiswa', apiRoutes);

// Launch app to listen specified PORT
app.listen(port, function() {
    console.log("Running Resthub on port " + port);
})