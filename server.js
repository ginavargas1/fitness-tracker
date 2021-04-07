//needs express, mongoose require
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.envPORT || 3000;
const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));


const URI = process.env.MOGODB_URI || "mongodb://localhost/workout"
mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParserL: true,
    useFindAndModify: false
});


//add routes 
app.use(require("./routes/api.js"));
app.use(require("./routes/views.js"));


app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}!`)
});