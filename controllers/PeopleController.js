const database = require("../models");

class PeopleController {
  static async getActivePeople(req, res) {
    try {
      const activePeople = await database.People.findAll();
      return res.status(200).json(activePeople);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async getAllPeople(req, res) {
    try {
      const allPeople = await database.People.scope("all").findAll();
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

      const personExists = await database.People.scope("all").findOne({
        where: { id: Number(id) },
      });

      if (!personExists)
        throw new Error(`(WARNING) Pessoa ID:${id} não encontrada!`);

      const rowDeleted = await database.People.scope("all").destroy({
        where: { id: Number(id) },
      });

      if (!rowDeleted) throw new Error("Erro inesperado!");

      return res
        .status(200)
        .json(`(INFO) Pessoa ID:${id} excluída com sucesso!`);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async restorePerson(req, res) {
    const { id } = req.params;
    try {
      // const personExists = await database.People.scope("all").findOne({
      //   where: { id: Number(id) },
      // });

      // if (!personExists)
      //   throw new Error(`(WARNING) Registro ID:${id} não encontrado!`);

      await database.People.restore({ where: { id: Number(id) } });

      return res
        .status(200)
        .json({ message: `(INFO) O id:${id} foi restaurado com sucesso!` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async createEnrollPerson(req, res) {
    const { studentId } = req.params;
    const enrollInfo = req.body;

    try {
      const newEnroll = { ...enrollInfo, student_id: Number(studentId) };
      const enroll = await database.Enrollments.create(newEnroll);
      return res.status(200).json(enroll);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async getAllEnrollments(req, res) {
    try {
      const allEnrollments = await database.Enrollments.findAll();
      return res.status(200).json(allEnrollments);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async getEnrollmentByPerson(req, res) {
    const { studentId, enrollmentId } = req.params;
    try {
      const enrollment = await database.Enrollments.findOne({
        where: {
          id: Number(enrollmentId),
          student_id: Number(studentId),
        },
      });
      return res.status(200).json(enrollment);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async getAllEnrollmentsByPerson(req, res) {
    const { studentId } = req.params;

    try {
      const enrollmentsOfPerson = await database.Enrollments.findAll({
        where: { student_id: Number(studentId) },
      });
      return res.status(200).json(enrollmentsOfPerson);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async updateEnroll(req, res) {
    const { studentId, enrollmentId } = req.params;
    const newInfo = req.body;

    try {
      await database.Enrollments.update(newInfo, {
        where: { id: Number(enrollmentId), student_id: Number(studentId) },
      });
      const enrollUpdated = await database.Enrollments.findOne({
        where: { id: Number(enrollmentId), student_id: Number(studentId) },
      });
      res.status(200).json(enrollUpdated);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async deleteEnroll(req, res) {
    const { studentId, enrollmentId } = req.params;

    try {
      const enrollmentExists = await database.Enrollments.findOne({
        where: {
          id: Number(enrollmentId),
          student_id: Number(studentId),
        },
      });

      if (!enrollmentExists) throw new Error(`Essa matricula não existe!`);

      const rowDeleted = await database.Enrollments.destroy({
        where: {
          id: Number(enrollmentId),
          student_id: Number(studentId),
        },
      });

      if (!rowDeleted) throw new Error(`Erro inesperado!`);

      return res
        .status(200)
        .json(`A matricula ID:${enrollmentId} foi excluída com sucesso!`);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = PeopleController;
