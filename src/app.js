import morgan from "morgan";
import users from "./routes/users_routes";
import clients from "./routes/clients_routes";
import services from "./routes/services_routes";
import barbers from "./routes/barbers_routes";
import turns from "./routes/turns_routes";
import hours from "./routes/hours_routes";
import { config } from "dotenv";
config();

const express = require("express");
const cors = require("cors");
const http = require("http");
const socketIO = require("socket.io");

const app = express();

// Lista de dominios permitidos
const allowedOrigins = [
  "http://localhost:3000", // Dominio de desarrollo
  "https://calendarfront-alpha.vercel.app", // Dominio de producción
];

const corsOptions = {
  origin: function (origin, callback) {
    // Permitir herramientas locales y dominios permitidos
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Asegúrate de incluir 'OPTIONS'
  credentials: true, // Permitir credenciales (cookies, headers con auth)
};

// Configurar CORS
app.use(cors(corsOptions));

// Middleware
app.use(morgan("dev"));
app.use(express.json());

// Rutas
app.use("/api/users", users);
app.use("/api/clients", clients);
app.use("/api/services", services);
app.use("/api/barbers", barbers);
app.use("/api/turns", turns);
app.use("/api/hours", hours);

// Crear el servidor HTTP
const server = http.createServer(app);

// Configurar Socket.io con CORS
const io = socketIO(server, {
  cors: {
    origin: allowedOrigins,
    methods: ["GET", "POST"],
    credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log("Usuario conectado", socket.id);

  socket.on("disconnect", () => {
    console.log("Usuario desconectado");
  });
});

// Inicializar el servidor
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
