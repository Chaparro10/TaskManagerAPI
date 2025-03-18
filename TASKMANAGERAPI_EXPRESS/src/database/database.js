//UTILIZANDO DRIZZLE ORM Y MYSQL 2

import mysql from "mysql2";
import { drizzle } from "drizzle-orm/mysql2";
import { DB_HOST, DB_NAME, DB_PASS, DB_USER } from "../config.js";

// 🟢 Crear el pool de conexión con MySQL2
const pool = mysql.createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASS,
  database: DB_NAME,
});
const dbsql = drizzle(pool);

const testConnection = async () => {
  try {
    const result = await dbsql.execute("SELECT 1");
    console.log("✅  Conexion existosamente", result);
  } catch (error) {
    console.log("Db:Ocurrio un error", error);
  }
};

export default dbsql;
