const express = require("express");
//const sequelize = require("sequelize");
const routes = require("./routes");
// import sequelize connection
const connect = require("./config/connection");

const app = express();
const PORT = process.env.PORT || 3306;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

connect.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
});

//app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
