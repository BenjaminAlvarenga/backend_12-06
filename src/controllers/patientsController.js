import patientsModel from "../models/patients.js";
import { v2 as cloudinary } from "cloudinary";

const patientsController = {};

patientsController.getPatients = async (req, res) => {
  try {
    const specialties = await patientsModel.find();
    return res.status(200).json(specialties);
  } catch (error) {
    console.log("Error al llamar a las especialidades" + error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

patientsController.postPatient = async (req, res) => {
  try {
    const {
      name,
      lastName,
      email,
      password,
      birthDate,
      phone,
      address,
      bloodType,
      phoneEmergencyContacts,
      isVerified,
      loginAttempts,
      timeout,
    } = req.body;

    const newPatient = new patientsModel({
      name,
      lastName,
      email,
      password,
      birthDate,
      phone,
      address,
      bloodType,
      phoneEmergencyContacts,
      image: req.file.path,
      public_id: req.file.filename,
      isVerified,
      loginAttempts,
      timeout,
    });

    await newPatient.save();

    return res.status(200).json(newEquipment);
  } catch (error) {
    console.log("Error al ingresar un equipo " + error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

patientsController.putPatient = async (req, res) => {};

patientsController.deletePatient = async (req, res) => {
  try {
    const deleted = await patientsModel.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ message: "Especialidad no encontrada" });
    }

    return res
      .status(200)
      .json({ message: "Especialidad eliminada con exito" });
  } catch (error) {
    console.log("Error al eliminar la especialidad" + error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export default patientsController;
