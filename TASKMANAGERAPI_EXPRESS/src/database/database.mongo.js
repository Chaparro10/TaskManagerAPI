import mongoose from "mongoose";
import { MONGO_URI } from "../config";

const mongoDB = MONGO_URI;

mongoose
  .connect(mongoDB)
  .then(() => console.log(" Conexion Existosa"))
  .catch((err) => console.log("Ocurrio un error en Mongo:", err));


export default mongoose; 
