const express = require("express");
const ejs = require("ejs");
const bodyparser = require("bodyparser");
require("./models/db");
const routes = require("./routes/web");
const { route } = require("./routes/web");
const app = express();

app.set("view engine", ejs);

app.use(express.static("public"));

app.use(bodyparser.urlencoded({extended: true}));

app.use(routes);

app.listen(3000, () =>{

    console.log('Server is running on port 3000');
})