const { Sequelize } = require("sequelize");
require("dotenv").config();

// module.exports = new Sequelize(
//   process.env.DB_NAME,
//   process.env.DB_USER,
//   process.env.DB_PASSWORD,
//   {
//     dialect: "postgres",
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
//   }
// );

module.exports = new Sequelize(
  "postgres://iudtywrqifxaqi:2cbdb1da637ca374d1f1ded6675acde5dbfd4d69cc1c834b5dd27efe6853ce9c@ec2-63-34-223-144.eu-west-1.compute.amazonaws.com:5432/d3gif98mkhecft",
  {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  }
);
