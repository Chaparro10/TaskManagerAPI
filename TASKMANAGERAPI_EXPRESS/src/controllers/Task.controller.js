import { QueryBuilder } from "drizzle-orm/mysql-core";
import taskModel from "../models/task.model.js";

export const createTask = async (req, res) => {
    try {
        if (req.body || Object.keys(req.body).length == 0) {
            return res.status(404).json({
                ok: false,
                msg: "No se proporciono la data correctamente",
            });
        }

        const savedTask = await taskModel.create(req.body);
        res.status(201).json(savedTask);
    } catch (error) {
        res.status(500).json({ message: "Error al crear la tarea", error });
    }
};

export const getTasks = async (req, res) => {
    try {
        const tasks = await taskModel.find();
        res.status(200).json({
            ok: true,
            tasks
        })
    } catch (error) {
        console.log('error', error)
        res.status(500).json({
            ok: false,
            msg: "Ocurrio un error inesperado"
        })
    }
}

export const updateTask = async (req, res) => {
    try {
        const isValid = validaDataBody(req.body);
        if (!isValid) {
            return res.status(404).json({
                ok: false,
                msg: "No se proporciono la data correctamente"
            })
        }

        const response = await taskModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json({
            ok: true,
            response
        })
    } catch (error) {
        console.log('error:', error)
        res.status(500).json({
            ok: false,
            msg: "Ocurrio un error inesperado"
        })
    }
}


export const deleteTask = async (req, res) => {
    try {
        if (!req.query) {
            return res.status(404).json({
                ok: false,
                msg: "No se proporciono la data correctamente"
            })
        }
        const response = await taskModel.findByIdAndDelete(req.query.id);
        res.status(200).json({
            ok: true,
            msg: "Eliminado Correctamente"
        })
    } catch (error) {
        console.log('error:', error)
        res.status(500).json({
            ok: false,
            msg: "Ocurrio un error inesperado"
        })
    }
}

export const getTaskByUser = async (req, res) => {
    try {
        const response = await taskModel.find({ idUser: req.params.id });
        res.status(200).json({
            ok: true,
            response
        })
    } catch (error) {
        console.log('error:', error)
        res.status(500).json({
            ok: false,
            msg: "Ocurrio un error inesperado"
        })
    }
}


const validaDataBody = (data) => {
    if (!data || Object.keys(data).length == 0) {
        return false;
    }
    return true;
};

