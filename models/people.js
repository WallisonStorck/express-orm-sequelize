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
      name: DataTypes.STRING,
      enable: DataTypes.BOOLEAN,
      email: DataTypes.STRING,
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
