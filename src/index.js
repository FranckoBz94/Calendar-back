import app from "./app.js";
// const app = require("./app.js");
import { Server } from "socket.io";
import { createServer } from "http";
import { config } from "dotenv";
config();
console.log("ap".app);
const server = createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"], // Los métodos permitidos
    credentials: true,
  },
  connectionStateRecovery: {},
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
  server.listen(port, "0.0.0.0", () => {
    console.log(`Server corriendo en puerto ${port}`);
  });
};

main();
