import express from "express";

import "dotenv/config"; //Cargar las variables de entorno
import testConnection from "./database/database.js";
import mongoose  from "./database/database.mongo.js";
import userRoutes from "./routes/user.route.js"; 
import taskRoutes from './routes/task.route.js'

const app = express();
app.use(express.json());

// testConnection();
mongoose

app.use("/api/user", userRoutes);
app.use("/api/task", taskRoutes);

app.listen(3000, () => {
  console.log("Servidor ejecutando en el puerto 3000");
});
