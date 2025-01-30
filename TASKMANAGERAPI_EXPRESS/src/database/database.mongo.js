import mongoose from "mongoose";

const mongoDB = process.env.MONGO_URI;

mongoose
  .connect(mongoDB)
  .then(() => console.log(" Conexion Existosa"))
  .catch((err) => console.log("Ocurrio un error en Mongo:", err));


  export default mongoose; 
