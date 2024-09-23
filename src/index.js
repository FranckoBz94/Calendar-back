import app from "./app";
import { Server } from "socket.io";
import { createServer } from "http";
import { config } from "dotenv";
config();

const server = createServer(app);

const io = new Server(server, {
  cors: {
    origin: [
      "http://localhost:3000",
      "http://192.168.0.6:3000",
      "http://soft-salamander-3ca822.netlify.app",
    ],
    methods: ["GET", "POST", "PUT", "DELETE"], // Los métodos permitidos
    credentials: true,
  },
  connectionStateRecovery: {},
});

const port = app.get("port");

// app.get("/", (req, res) => {
//   res.sendFile(process.cwd() + "/front/src/index.tsx");
// });

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
  server.listen(port, "0.0.0.0", () => {
    console.log(`Server corriendo en puerto ${port}`);
  });
};

main();
