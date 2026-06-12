/**
 * specialtyName
 * description
 * isAvailable
 */

import { Schema, model } from "mongoose";

const specialtiesSchema = new Schema({
    specialtyName: {Type: String},
    description: {Type: String},
    isAvailable: {Type: Boolean}
},{
    timestamps: true,
    strict: false
})

export default model("Specialties", specialtiesSchema)