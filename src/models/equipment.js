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
    equipmentName: {type: String},
    description: {type: String},
    brand: {type: String},
    model: {type: String},
    purchaseDate: {type: Date},
    maintanceDate: {type: Date},
    condition: {type: String},
    image: {type: String},
    public_id: {type: String},
    status: {type: String},
    isAvailable: {type: String}
},{
    timestamps: true,
    strict: false
})

export default model("Equipment", equipmentSchema)