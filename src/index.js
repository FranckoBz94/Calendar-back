import app from "./app.js";
import { Server } from "socket.io";
import { createServer } from "http";
import { config } from "dotenv";
config();
const server = createServer(app);

const io = new Server(server, {
  cors: {
    origin: [
      "http://localhost:3000",
      "https://calendarfront-alpha.vercel.app",
      "https://calendar-back-production-c26d.up.railway.app",
      "https://calendar-back-production-cf69.up.railway.app",
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Origin, X-Requested-With", "Content-Type", "Accept"],
    credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log("a user has connected");

  socket.on("disconnect", () => {
    console.log("a user has disconnectedd");
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
    const port = process.env.PORT || 4000;
    server.listen(port, () => {
      console.log(`Zona horaria `, process.env.TZ);
      console.log(`Server corriendo en puerto ${port}`);
    });
  } catch (error) {
    console.error("Error starting the server:", error);
  }
};

main();
