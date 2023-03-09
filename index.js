const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/routes");

// mongooDB connection
require("dotenv").config();

const mongoString = process.env.DATABASE_URL;
mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (_error) => {
  console.log(_error);
});
database.once("connected", () => {
  console.log("Database Connected");
});

// transfer the contents of Express into a new constant called app
const app = express();

app.use(express.json());

app.listen(3000, () => {
  console.log(`Server Start at ${3000}`);
});

// One is the base endpoint, and the other is the contents of the routes.
// Now, all our endpoints will start from '/api'
app.use("/api", routes);
