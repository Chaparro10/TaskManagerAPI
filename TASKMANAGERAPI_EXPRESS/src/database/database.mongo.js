import mongoose from "mongoose";
import { MONGO_URI } from "../config.js";

const mongoDB = MONGO_URI;

console.log('mongoDB', mongoDB)
mongoose
  .connect(mongoDB)
  .then(() => console.log(" Conexion Existosa"))
  .catch((err) => console.log("Ocurrio un error en Mongo:", err));


export default mongoose; 
