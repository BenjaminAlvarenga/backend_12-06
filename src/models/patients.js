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

const patientSchema = new Schema({
    name:{Type: String},
    lastName: {Type: String},
    email: {Type: String},
    password: {Type: String},
    birthDate: {Type: Date},
    phone: {Type: String},
    address: {Type: String},
    bloodType: {Type: String},
    phoneEmergencyContacts: [{phone: {Type:String}}],
    profilePhoto: {Type: String},
    public_id: {Type: String},
    isVerified: {Type: Boolean},
    loginAttempts: {Type: Number},
    timeout: {Type: Date}
},{
    timestamps: true,
    strict: false
})

export default model("Patients", patientSchema)