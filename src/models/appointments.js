/**
 * patient_id
 * specialty_id
 * appointmentDate
 * reason
 * status
 * observations
 */

import { Schema, model } from "mongoose";

const appointmentSchema = new Schema({
    patient_id: {Type: String},
    specialty_id:{Type: String},
    appointmentDate: {Type: Date},
    reason: {Type: String},
    status: {Type: String},
    observations: {Type: String}
},{
    timestamps: true,
    strict: false
})

export default model("Appointments", appointmentSchema)