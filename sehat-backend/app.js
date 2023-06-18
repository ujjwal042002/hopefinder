require("dotenv").config();
const express = require("express");
const { dbConn } = require("./config/db");
const cors = require("cors");
const hospitalRoutes = require("./routes/hospital");
const userRoutes = require("./routes/user");
// const fs = require('fs');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/api/hospital", hospitalRoutes);
app.use("/api/user", userRoutes);

dbConn();
app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
