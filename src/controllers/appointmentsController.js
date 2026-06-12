import appointmentsModel from "../models/appointments.js";

const appointmentsController = {};

appointmentsController.getSpecialties = async (req, res) => {
  try {
    const specialties = await appointmentsModel.find();
    return res.json(specialties);
  } catch (error) {
    console.log("Error al llamar a las especialidades" + error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

appointmentsController.postSpecialty = async (req, res) => {
  try {
    const {
      patient_id,
      specialty_id,
      appointmentDate,
      reason,
      status,
      observations,
    } = req.body;

    const filesExists = await appointmentsModel.findOne({ patient_id });
    if (specialtyExists) {
      return res.status(400).json({ message: "Especialidad ya existe" });
    }

    const newSpecialty = appointmentsModel(req.body);

    await newSpecialty.save();

    return res.status(200).json(newSpecialty);
  } catch (error) {
    console.log("Error al ingresar una especialidad" + error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

appointmentsController.putSpecialty = async (req, res) => {
  try {
    const {
      patient_id,
      specialty_id,
      appointmentDate,
      reason,
      status,
      observations,
    } = req.body;

    await appointmentsModel.findByIdAndUpdate(req.params.id, req.body, {
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

appointmentsController.deleteSpecialty = async (req, res) => {
  try {
    const deleted = await appointmentsModel.findByIdAndDelete(req.params.id);

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

export default appointmentsController;
