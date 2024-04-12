import mongoose from "mongoose";

const adminCollection = "admin";
const adminSchema = mongoose.Schema(
  { 
    nombre: {type: String, require: true},
    email: { type: String, require: true },
    password: { type: String, require: true },
  },
  { versionKey: false }
);

const adminModel = mongoose.model(adminCollection, adminSchema)
export default adminModel
