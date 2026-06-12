import patientsModel from "../models/patients.js";
import {v2 as cloudinary} from "cloudinary"

const patientsController = {};

patientsController.getSpecialties = async (req, res) => {
  try {
    const specialties = await patientsModel.find();
    return res.status(200).json(specialties);
  } catch (error) {
    console.log("Error al llamar a las especialidades" + error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

patientsController.postSpecialty = async (req, res) => {
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
      profilePhoto: req.file.path,
      public_id: req.file.filename,
      isVerified,
      loginAttempts,
      timeout,
    } = req.body;

    const specialtyExists = await patientsModel.findOne({ specialtyName });
    if (specialtyExists) {
      return res.status(400).json({ message: "Especialidad ya existe" });
    }

    const newSpecialty = patientsModel(req.body);

    await newSpecialty.save();

    return res.status(200).json(newSpecialty);
  } catch (error) {
    console.log("Error al ingresar una especialidad" + error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

patientsController.putSpecialty = async (req, res) => {
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
      profilePhoto:req.file.path,
      public_id: req.file.filename,
      isVerified,
      loginAttempts,
      timeout,
    } = req.body;

    if(req.file){
        await cloudinary.uploader.destroy()
    }

    await patientsModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    return res
      .status(200)
      .json({ message: "Paciente actualizada con exito" });
  } catch (error) {
    console.log("Error al actualizar la especialidad " + error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

patientsController.deleteSpecialty = async (req, res) => {
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
