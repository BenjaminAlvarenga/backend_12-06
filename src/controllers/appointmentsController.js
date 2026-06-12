import appointmentsModel from "../models/appointments.js";

const appointmentsController = {};

appointmentsController.getSpecialties = async (req, res) => {
  try {
    const specialties = await appointmentsModel.find();
    return res.json(specialties);
  } catch (error) {
    console.log("Error al llamar a las citas" + error);
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

    const newSpecialty = new appointmentsModel({
      patient_id,
      specialty_id,
      appointmentDate,
      reason,
      status,
      observations,
    });

    await newSpecialty.save();

    return res.status(200).json(newSpecialty);
  } catch (error) {
    console.log("Error al ingresar una cita" + error);
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

    return res.status(200).json({ message: "Cita actualizada con exito" });
  } catch (error) {
    console.log("Error al actualizar la especialidad " + error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

appointmentsController.deleteSpecialty = async (req, res) => {
  try {
    const deleted = await appointmentsModel.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ message: "Cita no encontrada" });
    }

    return res.status(200).json({ message: "Cita eliminada con exito" });
  } catch (error) {
    console.log("Error al eliminar la cita" + error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export default appointmentsController;
