//UTILIZANDO DRIZZLE ORM Y MYSQL 2

import mysql from "mysql2";
import { drizzle } from "drizzle-orm/mysql2";

// 🟢 Crear el pool de conexión con MySQL2
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
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
