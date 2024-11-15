import mysql from "mysql2";
import config from "../config.js";

const connection = mysql
  .createConnection({
    host: config.host,
    database: config.database,
    user: config.user,
    password: config.password,
  })
  .promise();

export const getConnection = () => {
  return connection;
};
