import equipmentModel from "../models/equipment.js";
import { v2 as cloudinary } from "cloudinary";

const equipmentController = {};

equipmentController.getEquipment = async (req, res) => {
  try {
    const specialties = await equipmentModel.find();
    return res.json(specialties);
  } catch (error) {
    console.log("Error al llamar a las especialidades" + error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

equipmentController.postEquipment = async (req, res) => {
  try {
    const {
      equipmentName,
      description,
      brand,
      model,
      purchaseDate,
      maintanceDate,
      condition,
      status,
      isAvailable,
    } = req.body;

    const newEquipment = new equipmentModel({
      equipmentName,
      description,
      brand,
      model,
      purchaseDate,
      maintanceDate,
      condition,
      image: req.file.path,
      public_id: req.file.filename,
      status,
      isAvailable,
    });

    await newEquipment.save();

    return res.status(200).json(newEquipment);
  } catch (error) {
    console.log("Error al ingresar un equipo " + error + req.body);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

equipmentController.putEquipment = async (req, res) => {
  try {
    const equipmentFound = await equipmentModel.findById(req.params.id);

    const updatedEquipment = new equipmentModel({
      equipmentName,
      description,
      brand,
      model,
      purchaseDate,
      maintanceDate,
      condition,
      status,
      isAvailable,
    });

    if (req.file) {
      await cloudinary.uploader.destroy(equipmentFound.public_id);

      updatedEquipment.image = req.file.path;
      updatedEquipment.public_id = req.file.filename;
    }

    await equipmentModel.findByIdAndUpdate(req.params.id, updatedEquipment, {
      new: true,
    });

    return res
      .status(200)
      .json({ message: "Equipo actualizado " + updatedEquipment });
  } catch (error) {
    console.log("Error" + error)
    return res.status(500).json({message: "Internal Server Error"})
  }
};

equipmentController.deleteEquipment = async (req, res) => {
  try {
    const deleted = await equipmentModel.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ message: "Equipo no encontrada" });
    }

    return res
      .status(200)
      .json({ message: "Equipo eliminada con exito" });
  } catch (error) {
    console.log("Error al eliminar la especialidad" + error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export default equipmentController;
