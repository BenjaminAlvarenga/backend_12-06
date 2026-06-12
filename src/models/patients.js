/**
 * name
 * lastName
 * email
 * password
 * birthDate
 * phone
 * address
 * bloodType
 * phoneEmergencyContacts
 * profilePhoto
 * isVerified
 * loginAttempts
 * timeout
 */

import { Schema, model } from "mongoose";

const patientSchema = new Schema(
  {
    name: { type: String },
    lastName: { type: String },
    email: { type: String },
    password: { type: String },
    birthDate: { type: Date },
    phone: { type: String },
    address: { type: String },
    bloodType: { type: String },
    phoneEmergencyContacts: [
      { phone: { type: String }, nameEmergencyContact: { type: String } },
    ],
    image: { type: String },
    public_id: { type: String },
    isVerified: { type: Boolean },
    loginAttempts: { type: Number },
    timeout: { type: Boolean },
  },
  {
    timestamps: true,
    strict: false,
  },
);

export default model("Patients", patientSchema);
