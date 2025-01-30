import express from "express";

import "dotenv/config"; //Cargar las variables de entorno
import testConnection from "./database/database.js";
import userRoutes from "./routes/user.route.js"; // Importación directa de rutas

const app = express();
app.use(express.json());

// testConnection();

app.use("/api/user", userRoutes);

app.listen(3000, () => {
  console.log("Servidor ejecutando en el puerto 3000");
});
