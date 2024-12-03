import mysql from "mysql2/promise";
import { config } from "dotenv";

config();

const getConnection = async () => {
  try {
    const connection = await mysql.createConnection({
      host: process.env.HOST,
      user: process.env.USER,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
      port: process.env.PORT,
      connectTimeout: 10000, // 10 segundos
    });
    await connection.connect();
    return connection;
  } catch (error) {
    console.error("Error creating connection:", error);
    throw error;
  }
};

export { getConnection };
