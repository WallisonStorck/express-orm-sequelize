const database = require("../models");

class LevelsController {
  static async getAllLevels(req, res) {
    try {
      const allLevels = await database.Levels.findAll();
      return res.status(200).json(allLevels);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async findLevel(req, res) {
    const { id } = req.params;
    try {
      const level = await database.Levels.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(level);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async insertLevel(req, res) {
    const newLevel = req.body;

    try {
      const newLevelEntered = await database.Levels.create(newLevel);
      return res.status(200).json(newLevelEntered);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async updateLevel(req, res) {
    const { id } = req.params;
    const newInfo = req.body;

    try {
      await database.Levels.update(newInfo, { where: { id: Number(id) } });
      const levelsUpdated = await database.Levels.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(levelsUpdated);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async deleteLevel(req, res) {
    const { id } = req.params;

    try {
      const levelExists = await database.Levels.findOne({
        where: { id: Number(id) },
      });

      if (!levelExists) throw new Error(`O level ID:${id} não existe!`);

      const rowDeleted = await database.Levels.destroy({
        where: { id: Number(id) },
      });

      if (!rowDeleted) throw new Error("Erro inesperado!");

      res.status(200).json(`Level ID:${id} deletado com sucesso!`);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
}

module.exports = LevelsController;
