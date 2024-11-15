import mysql from "mysql2";
import { config } from "dotenv";
config();

const dbConfig = {
  host: process.env.HOST,
  database: process.env.DATABASE,
  user: process.env.USER,
  password: process.env.PASSWORD,
  port: process.env.PORT,
};

let connection;

function handleDisconnect() {
  connection = mysql.createConnection(dbConfig).promise();
  connection.connect(function (err) {
    if (err) {
      console.error("Error connecting to database:", err);
      setTimeout(handleDisconnect, 2000); // Reconectar después de 2 segundos
    } else {
      console.log("Connected to database.");
    }
  });

  connection.on("error", function (err) {
    console.error("Database error", err);
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      handleDisconnect(); // Reconectar en caso de desconexión
    } else {
      throw err;
    }
  });
}

handleDisconnect();

export const getConnection = () => {
  return connection;
};
