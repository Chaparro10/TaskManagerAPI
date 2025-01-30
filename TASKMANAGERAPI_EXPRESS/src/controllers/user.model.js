import dbsql from "../database/database.js";
import userTable from "../models/user.model.js";

export const getUser = async (req, res) => {
  try {
    const data = await dbsql.select().from(userTable);
    console.log('data', data)
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.json({
      message: "Ocurrio un error Inesperado",
      status: 500,
    });
  }
};
