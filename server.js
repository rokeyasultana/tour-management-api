const mongoose = require("mongoose");
 require("dotenv").config();
const colors = require("colors");

const app = require("./app");

// database connection


mongoose.connect( `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.l9km6es.mongodb.net/?retryWrites=true&w=majority`).then(()=>{
  console.log(`Database connection is successful`, { useUnifiedTopology: true });
})

// server
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`App is running on port ${port}`.blue.bold);
});