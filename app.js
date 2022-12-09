require("dotenv").config();
const express = require("express");

const { PORT } = process.env;
const port = PORT || 5000;
const app = express();

// Enable body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => console.log(100));
app.use("/api", require("./routes/openaiRoutes"));

app.listen(port, () => console.log(`Server running on port ${port}`));
