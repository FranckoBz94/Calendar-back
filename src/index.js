import app from "./app.js";
import { Server } from "socket.io";
import { createServer } from "http";
import { config } from "dotenv";
config();

const server = createServer(app);

const io = new Server(server, {
  cors: {
    origin: ["https://calendarfront-alpha.vercel.app", "http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
    allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept"],
  },
  connectionStateRecovery: {},
});

// Configuración de CORS para otras rutas si es necesario
app.use((req, res, next) => {
  const allowedOrigins = [
    "https://calendarfront-alpha.vercel.app",
    "http://localhost:3000",
  ];
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.header("Access-Control-Allow-Origin", origin);
  }
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

const port = process.env.PORT || app.get("port");
console.log(`Server corriendo en puerto ${port}`);

io.on("connection", (socket) => {
  console.log("a user has connected");

  socket.on("disconnect", () => {
    console.log("a user has disconnected");
  });

  socket.on("turn", async (barberId) => {
    try {
      console.log(`Mensaje recibido: ${barberId}`);
      io.emit("turn", barberId);
    } catch (error) {
      console.error("Error fetching updated turns:", error);
    }
  });
});

const main = () => {
  try {
    server.listen(port, () => {
      console.log(`Server corriendo en puerto ${port}`);
    });
  } catch (error) {
    console.error("Error starting the server:", error);
  }
};

main();
