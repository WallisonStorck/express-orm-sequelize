"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class People extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      People.hasMany(models.Classes, {
        foreignKey: "teacher_id",
      });
      People.hasMany(models.Enrollments, {
        foreignKey: "student_id",
      });
    }
  }
  People.init(
    {
      name: {
        type: DataTypes.STRING,
        validate: {
          len: {
            args: [2, 45],
            msg: "O nome deve conter entre 2 e 45 caracteres!",
          },
        },
      },
      enable: DataTypes.BOOLEAN,
      email: {
        type: DataTypes.STRING,
        validate: {
          isEmail: {
            args: true,
            msg: "Dado tipo e-mail inválido!",
          },
        },
      },
      role: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "People",
      paranoid: true, //Soft Delete, marca o registro como apagado
      defaultScope: {
        where: { enable: true }, //Mostra somente os registros ativos
      },
      scopes: {
        all: { where: {} },
        // etc: {constraint: valor}
      },
    }
  );
  return People;
};
