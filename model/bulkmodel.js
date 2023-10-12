const Sequelize = require("sequelize");
const Connection = require("../config/db");
const { DataTypes } = Sequelize;


const User = Connection.define(
    "userdata123",
    {
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
    },
    username:{
        type:DataTypes.STRING,
        allowNull:false
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    }
    },
    {
        // Freeze Table Name
        freezeTableName: true,
        timestamps: false,
      }
    );

 User
  .sync({alter:true})
  .then(() => {
    console.log(" table created successfully!");
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });

module.exports = User;