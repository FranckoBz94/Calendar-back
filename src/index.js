import app from "./app.js";
import { Server } from "socket.io";
import { createServer } from "http";
import { config } from "dotenv";
config();

const server = createServer(app);

const io = new Server(server, {
  cors: {
    origin: "https://calendarfront-alpha.vercel.app", // Especifica el origen permitido
    methods: ["GET", "POST", "PUT", "DELETE"], // Los métodos permitidos
    credentials: true,
    allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept"],
  },
  connectionStateRecovery: {},
});

// Configuración de CORS para otras rutas si es necesario
app.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Origin",
    "https://calendarfront-alpha.vercel.app"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

const port = app.get("port");
console.log(port);

io.on("connection", (socket) => {
  console.log("a user has connected");

  socket.on("disconnect", () => {
    console.log("a user has disconnected");
  });

  socket.on("turn", async (barberId) => {
    try {
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
  // server.listen(port, "0.0.0.0", () => {
  //   console.log(`Server corriendo en puerto ${port}`);
  // });
};

main();
