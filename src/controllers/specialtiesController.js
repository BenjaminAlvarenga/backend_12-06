import specialtiesModel from "../models/specialties.js";

const specialtiesController = {};

specialtiesController.getSpecialties = async (req, res) => {
  try {
    const specialties = await specialtiesModel.find();
    return res.json(specialties);
  } catch (error) {
    console.log("Error al llamar a las especialidades" + error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

specialtiesController.postSpecialty = async (req, res) => {
  try {
    const { specialtyName, description, isAvailable } = req.body;

    const specialtyExists = await specialtiesModel.findOne({ specialtyName });
    if (specialtyExists) {
      return res.status(400).json({ message: "Especialidad ya existe" });
    }

    const newSpecialty = new specialtiesModel(req.body);

    await newSpecialty.save();

    return res.status(200).json(newSpecialty);
  } catch (error) {
    console.log("Error al ingresar una especialidad" + error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

specialtiesController.putSpecialty = async (req, res) => {
  try {
    const { specialtyName, description, isAvailable } = req.body;

    await specialtiesModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    return res.status(200).json({message:"Especialidad actualizada con exito"})
  } catch (error) {
    console.log("Error al actualizar la especialidad " + error)
    return res.status(500).json({message:"Internal Server Error"})
  }
};

specialtiesController.deleteSpecialty = async (req, res) =>{
    try {
        const deleted = await specialtiesModel.findByIdAndDelete(req.params.id)

        if(!deleted){
            return res.status(404).json({message:"Especialidad no encontrada"})
        }

        return res.status(200).json({message: "Especialidad eliminada con exito"})
    } catch (error) {
        console.log("Error al eliminar la especialidad" + error)
        return res.status(500).json({message: "Internal Server Error"})
    }
}

export default specialtiesController