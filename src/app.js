import morgan from "morgan";
//Routes
import users from "./routes/users_routes.js";
import clients from "./routes/clients_routes.js";
import services from "./routes/services_routes.js";
import barbers from "./routes/barbers_routes.js";
import turns from "./routes/turns_routes.js";
import hours from "./routes/hours_routes.js";
import { config } from "dotenv";
import express from "express";
import cors from "cors";
config();

const app = express();

app.use(
  "/uploads",
  express.static("uploads", {
    setHeaders: (res, path, stat) => {
      console.log(`Serving file: ${path}`);
    },
  })
);
app.use(
  "/uploads/imageBarbers",
  express.static("uploads/imageBarbers", {
    setHeaders: (res, path, stat) => {
      console.log(`Serving file: ${path}`);
    },
  })
);

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: [
      "Origin",
      "X-Requested-With",
      "Content-Type",
      "Accept",
      "Authorization",
    ],
    credentials: true,
  })
);
app.options(
  "*",
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: [
      "Origin",
      "X-Requested-With",
      "Content-Type",
      "Accept",
      "Authorization",
    ],
    credentials: true,
  })
);

app.set("port", process.env.PORT);

//Middlewares (funciones intermedias entre una peticion y una respuesta)
app.use(morgan("dev"));
app.use(express.json());

//Routes
app.use("/api/users", users);
app.use("/api/clients", clients);
app.use("/api/services", services);
app.use("/api/barbers", barbers);
app.use("/api/turns", turns);
app.use("/api/hours", hours);

export default app;
