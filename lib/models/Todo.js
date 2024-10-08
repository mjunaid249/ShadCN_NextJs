import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
  {
    title: String,
  },
  {
    timestamps: true,
  }
);

export const todoModel =
  mongoose.models.todo || mongoose.model("todo", todoSchema);
