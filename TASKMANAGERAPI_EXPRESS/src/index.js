import express from "express";

import "dotenv/config"; //Cargar las variables de entorno

import testConnection from "./database/database.js";
import mongoose from "./database/database.mongo.js";
import userRoutes from "./routes/user.route.js";
import taskRoutes from './routes/task.route.js'


import {createClient} from 'redis';
import { REDIS_URL } from "./config.js";
const client = createClient({
 url:REDIS_URL
});



client.connect();

client.on("connect", () => console.log("🟢 Conectado a Redis"));
client.on("error", (err) => console.error("🔴 Error en Redis:", err));



const app = express();
app.use(express.json());

// testConnection();
mongoose

app.use("/api/user", userRoutes);
app.use("/api/task", taskRoutes);


const mainRedis = async () => {
  await client.connect();
}

app.listen(3010, async () => {
  // await mainRedis();
  console.log("Servidor ejecutando en el puerto 3000");
});


export default client;