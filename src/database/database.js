// import mysql from "promise-mysql";
import config from "../config";
console.log("config,", config);
import mysql from "mysql2";

const connection = mysql
  .createConnection({
    host: config.host,
    database: config.database,
    user: config.user,
    password: config.password,
  })
  .promise();

const getConnection = () => {
  return connection;
};

module.exports = {
  getConnection,
};
