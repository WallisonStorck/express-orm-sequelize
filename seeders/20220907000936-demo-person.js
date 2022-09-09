"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "People",
      [
        {
          name: "Ana Souza",
          enable: true,
          email: "ana@ana.com",
          role: "student",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Marcos Cintra",
          enable: true,
          email: "marcos@marcos.com",
          role: "student",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Felipe Cardoso",
          enable: true,
          email: "felipe@felipe.com",
          role: "student",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sandra Gomes",
          enable: false,
          email: "sandra@sandra.com",
          role: "student",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Paula Morais",
          enable: true,
          email: "paula@paula.com",
          role: "teacher",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sergio Lopes",
          enable: true,
          email: "sergio@sergio.com",
          role: "teacher",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Wallison Storck",
          enable: true,
          email: "wallison@storck.com",
          role: "teacher",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("People", null, {});
  },
};
