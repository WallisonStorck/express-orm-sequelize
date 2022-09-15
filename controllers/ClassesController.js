const database = require("../models");

class ClassesController {
  static async getAllClasses(req, res) {
    try {
      const allClasses = await database.Classes.findAll();
      return res.status(200).json(allClasses);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async findClass(req, res) {
    const { id } = req.params;

    try {
      const classFound = await database.Classes.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(classFound);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async insertClass(req, res) {
    const newClass = req.body;

    try {
      const newClassEntered = await database.Classes.create(newClass);
      return res.status(200).json(newClassEntered);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async updateClass(req, res) {
    const { id } = req.params;
    const newClass = req.body;

    try {
      await database.Classes.update(newClass, { where: { id: Number(id) } });
      const classUpdated = await database.Classes.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(classUpdated);
    } catch (error) {
      return res.status(200).json(error.message);
    }
  }

  static async deleteClass(req, res) {
    const { id } = req.params;

    try {
      const classExist = await database.Classes.findOne({
        where: { id: Number(id) },
      });

      if (!classExist) throw new Error(`A turma ID:${id} não existe!`);

      const rowDeleted = await database.Classes.destroy({
        where: { id: Number(id) },
      });

      if (!rowDeleted) throw new Error(`Erro inesperado!`);

      return res.status(200).json(`A turma ID:${id} foi excluída com sucesso!`);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = ClassesController;
