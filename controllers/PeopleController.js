const database = require("../models");

class PeopleController {
  static async getAllPeople(req, res) {
    try {
      const allPeople = await database.People.findAll();
      return res.status(200).json(allPeople);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async findPerson(req, res) {
    const { id } = req.params;
    try {
      const person = await database.People.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(person);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async insertPerson(req, res) {
    const newPerson = req.body;

    try {
      const newPersonEntered = await database.People.create(newPerson);
      return res.status(200).json(newPersonEntered);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async updatePerson(req, res) {
    const { id } = req.params;
    const newInfo = req.body;

    try {
      await database.People.update(newInfo, { where: { id: Number(id) } }); //Atualiza pessoa
      const personUpdated = await database.People.findOne({
        //Procura pessoa atualizada para mostrar no retorno do método
        where: { id: Number(id) },
      });
      return res.status(200).json(personUpdated);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async deletePerson(req, res) {
    try {
      const { id } = req.params;

      const personExists = await database.People.findOne({
        where: { id: Number(id) },
      });

      if (!personExists) throw new Error(`Pessoa ID:${id} não encontrada!`);

      const rowDeleted = await database.People.destroy({
        where: { id: Number(id) },
      });

      if (!rowDeleted) throw new Error("Erro inesperado!");

      return res.status(200).json(`Pessoa ID:${id} excluída com sucesso!`);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = PeopleController;
