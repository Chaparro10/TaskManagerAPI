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
