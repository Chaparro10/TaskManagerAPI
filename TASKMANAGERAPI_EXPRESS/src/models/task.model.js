import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    idUser: { type: Number, required: true },
    status: { type: Number, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Task", taskSchema); //export the model
