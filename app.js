require("dotenv").config();
const express = require("express");
const ejs = require("ejs");
const path = require("path");

const { PORT } = process.env;
const port = PORT || 5000;
const app = express();

// Enable body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");

// Set static file
app.use(express.static(path.join(__dirname, "/public")));

app.get("/", (req, res) => res.render("index", { data: { img: { url: "" } } }));
app.use("/api", require("./routes/openaiRoutes"));

app.listen(port, () => console.log(`Server running on port ${port}`));
