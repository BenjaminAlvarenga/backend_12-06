import filesModel from "../models/files.js";

const filesController = {};

filesController.getFiles = async (req, res) => {
  try {
    const files = await filesModel.find();
    return res.json(files);
  } catch (error) {
    console.log("Error al llamar a los expedientes" + error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

filesController.postFile = async (req, res) => {
  try {
    const { patiend_id, diagnosis, medications, medicalNotes } = req.body;

    const patientExists = await filesModel.findOne({ patient_id });
    if (patientExists) {
      return res.status(400).json({ message: "Expediente ya existe" });
    }

    const newSpecialty = new filesModel(req.body);

    await newSpecialty.save();

    return res.status(200).json(newSpecialty);
  } catch (error) {
    console.log("Error al ingresar un expediente" + error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

filesController.putFile = async (req, res) => {
  try {
    const { patiend_id, diagnosis, medications, medicalNotes } = req.body;

    await filesModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    return res.status(200).json({message:"Expediente actualizado con exito"})
  } catch (error) {
    console.log("Error al actualizar el expediente " + error)
    return res.status(500).json({message:"Internal Server Error"})
  }
};

filesController.deleteFile = async (req, res) =>{
    try {
        const deleted = await filesModel.findByIdAndDelete(req.params.id)

        if(!deleted){
            return res.status(404).json({message:"Expediente no encontrado"})
        }

        return res.status(200).json({message: "Expediente eliminado con exito"})
    } catch (error) {
        console.log("Error al eliminar los expedientes" + error)
        return res.status(500).json({message: "Internal Server Error"})
    }
}

export default filesController