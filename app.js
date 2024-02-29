const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const routes = require("./routes/index");

const sequelize = require("./database/config");

app.use(express.json());
app.use(bodyParser.json());
app.use("/api", routes);
require("dotenv").config();

const port = process.env.PORT || 3000;
sequelize
  
  .sync()
  .then(() => {
    console.log(`listening to the port:${port}`);
    app.listen(port);
  })
  .catch((err) => console.log(err));
