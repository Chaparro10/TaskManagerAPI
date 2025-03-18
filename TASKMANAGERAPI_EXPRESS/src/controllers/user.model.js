import { eq } from "drizzle-orm";
import dbsql from "../database/database.js";
import userTable from "../models/user.model.js";
import client from "../index.js";



export const getUser = async (req, res) => {
  try {

      const userRedis= await client.get("users");
      if(userRedis){
        return res.json(JSON.parse(userRedis));
      }

    const data = await dbsql.select().from(userTable);

    const saveResultInRedis= await client.set('users',JSON.stringify(data),'EX', 3600);


    console.log('aqui')
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.json({
      message: "Ocurrio un error Inesperado",
      status: 500,
    });
  }
};

export const createuser = async (req, res) => {
  try {
    if (!req.body || Object.keys(req.body).length == 0) {
      return res.status(404).json({
        ok: false,
        msg: "No se recibio ningun dato",
      });
    }
    const newUser = await dbsql.insert(userTable).values(req.body);

    res.status(200).json({
      ok: true,
      msg: "Usuario creado con exito",
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "Ocurrio un error inesperado", error,
    });
  }
};

export const updateUser = async (req, res) => {
  try {
    const isValid = validaDataBody(req.body);
    if (!isValid) {
      return res.status(400).json({
        ok: false,
        msg: "No se recibio ningun dato",
      });
    }

    const updaUser = await dbsql.update(userTable).set(req.body).where(eq(userTable.id, req.params.id));
    console.log('updaUser', updaUser)
    res.status(200).json({
      ok: true,
      msg: "Usuario actualizado con exito",
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "Ocurrio un error inesperado",
    });
  }
};


export const deleteUser = async (req, res) => {
  try {//recibir data por la query
    const response = await dbsql.delete(userTable).where(eq(userTable.id, req.query.id));
    console.log('response', response)
    res.json({
      ok: true,
      msg: response[0].affectedRows == 0 ? "No se encontro el usuario a eliminar" : "Usuario eliminado correctamente"
    })

  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "Ocurrio un error inesperado",
    })
  }
}

const validaDataBody = (data) => {
  if (!data || Object.keys(data).length == 0) {
    return false;
  }
  return true;
};
