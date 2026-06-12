/**
 * equipmentName
 * description
 * brand
 * model
 * purchaseDate
 * maintanceDate
 * condition
 * image
 * public_id
 * status
 * isAvailable
 */

import { Schema, model } from "mongoose";

const equipmentSchema = new Schema({
    equipmentName: {Type: String},
    description: {Type: String},
    brand: {Type: String},
    model: {Type: String},
    purchaseDate: {Type: Date},
    maintanceDate: {Type: Date},
    condition: {Type: String},
    image: {Type: String},
    public_id: {Type: String},
    status: {Type: String},
    isAvailable: {Type: String}
},{
    timestamps: true,
    strict: false
})

export default model("Equipment", equipmentSchema)