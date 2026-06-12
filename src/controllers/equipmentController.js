import equipmentModel from "../models/equipment.js";

const equipmentController = {};

equipmentController.getSpecialties = async (req, res) => {
  try {
    const specialties = await equipmentModel.find();
    return res.json(specialties);
  } catch (error) {
    console.log("Error al llamar a las especialidades" + error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

equipmentController.postSpecialty = async (req, res) => {
  try {
    const {
      equipmentName,
      description,
      brand,
      model,
      purchaseDate,
      maintanceDate,
      condition,
      image,
      public_id,
      status,
      isAvailable,
    } = req.body;

    const newSpecialty = equipmentModel(req.body);

    await newSpecialty.save();

    return res.status(200).json(newSpecialty);
  } catch (error) {
    console.log("Error al ingresar una especialidad" + error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

equipmentController.putSpecialty = async (req, res) => {
  try {
    const {
      equipmentName,
      description,
      brand,
      model,
      purchaseDate,
      maintanceDate,
      condition,
      image,
      public_id,
      status,
      isAvailable,
    } = req.body;

    await equipmentModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    return res
      .status(200)
      .json({ message: "Especialidad actualizada con exito" });
  } catch (error) {
    console.log("Error al actualizar la especialidad " + error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

equipmentController.deleteSpecialty = async (req, res) => {
  try {
    const deleted = await equipmentModel.findByIdAndDelete(req.params.id);

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

export default equipmentController;
