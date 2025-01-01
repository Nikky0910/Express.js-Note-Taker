const express = require("express");
const routes = require("./routes/index.js");

const PORT = process.env.PORT || 3001;
// to initialize express
const app = express();

// to assign public as the url's home page
app.use(express.static("public"))

// to parse the data
app.use(express.json());
app.use(express.urlencoded({extended: true}))

// to define the routes
app.use(routes);

app.listen(PORT, ()=> {
    console.log('App is listening at http://localhost:' + PORT)
})