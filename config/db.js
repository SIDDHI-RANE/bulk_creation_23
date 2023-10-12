const Sequelize = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_LOCAL_NAME,
  process.env.DB_LOCAL_USER,
  process.env.DB_LOCAL_PASS,
  {
    host: process.env.DB_LOCAL_HOST,
    dialect: process.env.DB_DIALECT,
    dialectOptions: {
      useUTC: false,
    },
    timezone: "+05:30",
  }
);

//Test Connection
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database: ", error);
  });

module.exports = sequelize;
