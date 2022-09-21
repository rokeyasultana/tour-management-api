const express = require("express");
const app = express();
const cors = require("cors");
const tourRoutes = require("./routes/tours.route");

app.use(express.json());
app.use(cors());

app.use('/tours', tourRoutes);

app.get("/", (req, res) => {
  res.send("Route is working! YaY!");
});



module.exports = app;