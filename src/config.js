import { config } from "dotenv";
// Determina el archivo .env a cargar
const envFile =
  process.env.NODE_ENV === "production" ? ".env.production" : ".env";
config({ path: envFile }); // Carga el archivo correspondiente

// Opcional: verificar que se cargaron las variables
console.log("Loaded environment variables from:", envFile);
config();

export default {
  host: process.env.HOST || "",
  database: process.env.DATABASE || "",
  user: process.env.USER || "",
  password: process.env.PASSWORD || "",
  port: process.env.PORT || "",
};
