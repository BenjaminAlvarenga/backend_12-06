/**
 * patient_id
 * diagnosis
 * medications
 * medicalNotes
 */

import { Schema, model } from "mongoose";

const filesSchema = new Schema(
  {
    patient_id: {Type: String},
    diagnosis: { Type: String },
    medications: [{ medications: { Type: String } }],
    medicalNotes: { Type: String },
  },
  {
    timestamps: true,
    strict: false,
  },
);

export default model("files", filesSchema);
