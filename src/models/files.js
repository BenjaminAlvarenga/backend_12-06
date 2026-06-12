/**
 * patient_id
 * diagnosis
 * medications
 * medicalNotes
 */

import { Schema, model } from "mongoose";

const filesSchema = new Schema(
  {
    patient_id: {type: String},
    diagnosis: { type: String },
    medications: [{ medications: { type: String } }],
    medicalNotes: { type: String },
  },
  {
    timestamps: true,
    strict: false,
  },
);

export default model("files", filesSchema);
